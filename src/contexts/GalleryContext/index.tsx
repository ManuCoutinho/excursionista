import { createContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getGalleryImages } from 'functions/getGalleryImages'
import { initialState, reducer } from './factory'
import {
	GalleryActions,
	GalleryProviderProps,
	GalleryReducer
} from 'models/gallery'

export const GalleryContext = createContext<GalleryReducer>(
	{} as GalleryReducer
)

export const GalleryProvider: React.FC<GalleryProviderProps> = ({
	children
}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const router = useRouter()

	const queryImages = useQuery(
		['gallery-img', state.page],
		async () =>
			getGalleryImages(state.page, state.searchTerm.toLocaleLowerCase()),
		{
			keepPreviousData: true,
			onSuccess: async (data) =>
				dispatch({
					type: GalleryActions.SAVE_IMAGES,
					payload: data
				}),
			onError: () => console.log('medidas')
		}
	)

	useEffect(() => {
		const param = router.query.query
		if (param != undefined) {
			dispatch({
				type: GalleryActions.CREATE_SEARCH_TERM,
				payload: param.toString()
			})
			dispatch({
				type: GalleryActions.CREATE_TITLE,
				payload: param.toString()
			})
		}
	}, [router])
	useEffect(() => {
		if (state.searchTerm != undefined) {
			queryImages.refetch()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.searchTerm])
	return (
		<GalleryContext.Provider
			value={{
				state,
				dispatch,
				isLoading: queryImages.isLoading,
				isFetching: queryImages.isFetching
			}}>
			{children}
		</GalleryContext.Provider>
	)
}

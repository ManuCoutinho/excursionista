import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getGalleryImages } from 'functions/getGalleryImages'
import {
	ActionCreateSearchTerm,
	ActionCreateTitle,
	ActionDecrement,
	ActionImages,
	ActionIncrement,
	GalleryActions,
	GalleryReducer,
	GalleryStateReducer
} from 'models/gallery'

const initialState = {
	page: 1,
	title: '',
	images: undefined,
	searchTerm: ''
} as GalleryStateReducer

function reducer(
	state: GalleryStateReducer,
	action:
		| ActionCreateSearchTerm
		| ActionCreateTitle
		| ActionIncrement
		| ActionDecrement
		| ActionImages
): GalleryStateReducer {
	const decrementedState = state.page - 1
	const incrementedState = state.page + 1
	switch (action.type) {
		case GalleryActions.INCREMENT_PAGE:
			return {
				...state,
				page: incrementedState
			}
		case GalleryActions.DECREMENT_PAGE:
			return {
				...state,
				page: decrementedState
			}
		case GalleryActions.CREATE_SEARCH_TERM:
			return {
				...state,
				title: action.payload
			}
		case GalleryActions.CREATE_TITLE:
			return {
				...state,
				searchTerm: action.payload
			}
		case GalleryActions.SAVE_IMAGES:
			return {
				...state,
				images: action.payload
			}
		default:
			throw Error('Unknown action.')
	}
}

export function useGallery(): GalleryReducer {
	const [state, dispatch] = useReducer(reducer, initialState)

	const router = useRouter()

	const queryImages = useQuery(
		['gallery-img', state.page],
		() =>
			getGalleryImages(state.page, state.searchTerm.toLocaleLowerCase()),
		{
			keepPreviousData: true,
			refetchOnMount: true,
			onSuccess: (data) =>
				dispatch({ type: GalleryActions.SAVE_IMAGES, payload: data }),
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

	return { state, dispatch, isLoading: queryImages.isLoading }
}

import {
	ActionCreateSearchTerm,
	ActionCreateTitle,
	ActionDecrement,
	ActionImages,
	ActionIncrement,
	GalleryActions,
	GalleryStateReducer
} from 'models/gallery'

export function reducer(
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

export const initialState = {
	page: 1,
	title: '',
	images: undefined,
	searchTerm: ''
} as GalleryStateReducer

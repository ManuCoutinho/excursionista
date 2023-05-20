import { DataImages } from 'templates/Gallery/types'

export interface GalleryReducer {
	state: GalleryStateReducer
	dispatch: (
		type:
			| ActionCreateSearchTerm
			| ActionCreateTitle
			| ActionIncrement
			| ActionDecrement
			| ActionImages
	) => void
	isLoading: boolean
	isFetching: boolean
}

export type GalleryProviderProps = {
	children: React.ReactNode
}
export enum GalleryActions {
	'INCREMENT_PAGE',
	'DECREMENT_PAGE',
	'CREATE_TITLE',
	'CREATE_SEARCH_TERM',
	'SAVE_IMAGES'
}

export type GalleryStateReducer = {
	page: number
	title?: string
	searchTerm: string
	images?: DataImages
}

export type ActionCreateTitle = {
	type: GalleryActions.CREATE_TITLE
	payload: string
}
export type ActionCreateSearchTerm = {
	type: GalleryActions.CREATE_SEARCH_TERM
	payload: string
}
export type ActionIncrement = {
	type: GalleryActions.INCREMENT_PAGE
}
export type ActionDecrement = {
	type: GalleryActions.DECREMENT_PAGE
}
export type ActionImages = {
	type: GalleryActions.SAVE_IMAGES
	payload: DataImages
}

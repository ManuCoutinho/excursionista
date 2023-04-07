import { api } from 'services/unsplashApi'
import { DataImages } from 'templates/Gallery/types'
import { handleRemoveAccent } from './handleRemoveAccent'

export async function getGalleryImages(
	page: number,
	param: string
): Promise<DataImages> {
	const city = handleRemoveAccent(param).replaceAll(' ', '+')
	const request = await api.get(
		`search/photos?page=${page}&query=${city}&order_by=relevant&orientation=landscape&per_page=8`
	)
	return request.data
}

import { api } from 'lib/api'
import { DataImages } from 'templates/Gallery/types'
import { handleRemoveAccent } from './handleRemoveAccent'

export async function getGalleryImages(
	page: number,
	param: string
): Promise<DataImages> {
	const city = handleRemoveAccent(param)
	const request = await api.get(
		`search/photos?page=${page}&query=${city}&order_by=relevant&orientation=landscape`
	)
	return request.data
}

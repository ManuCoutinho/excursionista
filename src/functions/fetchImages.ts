import { DataImage } from 'models/image'
import { api } from 'services/unsplashApi'

export async function getImages(img: string): Promise<DataImage> {
	const request = await api.get(`photos/${img}`)
	const regular = request.data.urls.regular
	const thumb = request.data.urls.thumb
	const full = request.data.urls.full
	const author = request.data.user.name
	const userLink = request.data.user.links.html
	const downloadLocation = request?.data?.links?.download_location?.split(
		'https://api.unsplash.com/photos/'
	)[1]
	const alt = request?.data?.alt_description?.replaceAll(' ', '_') || null
	return { regular, thumb, full, author, userLink, downloadLocation, alt }
}

import { api } from 'api/api'

interface DataImage {
  regular: string
  full: string
  thumb: string
  author: string
  userLink: string
  downloadLocation: string
  alt: string
}

export async function getImages(img: string): Promise<DataImage> {
  const request = await api.get(`${img}`)
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

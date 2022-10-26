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
  const { data } = await api.get(`${img}`)
  const regular = data.urls.regular
  const thumb = data.urls.thumb
  const full = data.urls.full
  const author = data.user.name
  const userLink = data.user.links.html
  const downloadLocation = data.links.download_location.split('https://api.unsplash.com/photos/')[1]
  const alt = data.alt_description.replaceAll(' ', '_')

  return { regular, thumb, full, author, userLink, downloadLocation, alt }
}

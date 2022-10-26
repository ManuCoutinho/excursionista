import { useQuery } from 'react-query'
import { api } from '../services/api'
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

export function useQueryImages(img: string) {
  return useQuery(['unsplash', img], () => getImages(img), {
    staleTime: 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false
  })
}

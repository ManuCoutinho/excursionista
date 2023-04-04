import { useQuery } from 'react-query'
import { getImages } from 'functions/fetchImages'

export function useQueryImages(img: string) {
	return useQuery(['unsplash', img], () => getImages(img), {
		staleTime: 60 * 60 * 2, // 2 hours
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchIntervalInBackground: false
	})
}

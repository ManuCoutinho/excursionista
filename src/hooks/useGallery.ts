import { GalleryContext } from 'contexts/GalleryContext'
import { useContext } from 'react'

export function useGallery() {
	const context = useContext(GalleryContext)

	return { ...context }
}

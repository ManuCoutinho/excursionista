import { NextPage } from 'next'
import GalleryTemplate from 'templates/Gallery'
import { useGallery } from 'hooks/useGallery'

const GalleryPage: NextPage = () => {
	const { state, isLoading } = useGallery()

	return (
		<GalleryTemplate
			loading={isLoading}
			data={state.images}
			title={state.title}
		/>
	)
}

export default GalleryPage

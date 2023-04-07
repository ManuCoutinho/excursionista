import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const GalleryTemplate = dynamic(() => import('templates/Gallery'), {
	ssr: false,
	suspense: true
})

const GalleryPage: NextPage = () => {
	return <GalleryTemplate />
}

export default GalleryPage

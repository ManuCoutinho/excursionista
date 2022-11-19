import { NextPage } from 'next'

import GalleryTemplate from 'templates/Gallery'
import { useGallery } from 'hooks/useGallery'

const GalleryPage: NextPage = () => {
  const { data, isLoading, title } = useGallery()

  return <GalleryTemplate loading={isLoading} data={data} title={title} />
}

export default GalleryPage

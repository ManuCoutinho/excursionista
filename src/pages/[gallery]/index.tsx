import { useEffect } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useMenu } from 'hooks/useMenu'
import { useLocalStorage } from 'hooks/useLocalStorage'

const GalleryTemplate = dynamic(() => import('templates/Gallery'), {
	ssr: false,
	suspense: true
})

const GalleryPage: NextPage = () => {
	const [state] = useLocalStorage('menu', {})
	const { setData } = useMenu()
	useEffect(() => {
		setData(state)
	}, [state, setData])
	return <GalleryTemplate />
}

export default GalleryPage

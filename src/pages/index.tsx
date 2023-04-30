import { useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { GetPageQuery } from 'graphql/generated/graphql'
import { GET_PAGE } from 'graphql/queries'
import graphqlClient from 'services/gqlApi'
import { NavigationType } from 'contexts/navigation/types'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { Banner } from '../components/BannerHome'

type HomeProps = {
	menu: NavigationType[]
}

const Home: NextPage<HomeProps> = ({ menu }) => {
	const Content = dynamic(() => import('../components/MiddleSection'))
	const [, setValue] = useLocalStorage('menu', {})
	useEffect(() => {
		setValue(menu)
	}, [menu, setValue])
	return (
		<>
			<Head>
				<title>Excursionista | Home</title>
			</Head>
			<Banner />
			<Content />
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	const { pages } = await graphqlClient.request<GetPageQuery>(GET_PAGE)

	const menu = pages?.map((page) => {
		return {
			slug: page.slug,
			id: page.id,
			name: page.name
		}
	})
	return {
		props: {
			menu
		}
	}
}

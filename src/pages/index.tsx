import { useEffect, Fragment } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { NextSeo, WebPageJsonLd, LogoJsonLd } from 'next-seo'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { GetPageQuery } from 'graphql/generated/graphql'
import { GET_PAGE } from 'graphql/queries'
import graphqlClient from 'services/gqlApi'
import { NavigationType } from 'models/navigation'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { Banner } from '../components/BannerHome'
import SEO from 'constants/seo'

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
		<Fragment>
			<NextSeo
				title={`${SEO.title} | Home`}
				description={SEO.description}
				canonical={SEO.canonical}
				themeColor='#6D597A'
				additionalMetaTags={[
					{
						property: 'keywords',
						content: `${SEO.keywords}`
					}
				]}
			/>
			<LogoJsonLd
				logo={`${SEO.canonical}/assets/logo/log.svg`}
				url={SEO.canonical}
			/>
			<WebPageJsonLd
				id='https://www.manucoutinho.com'
				description='Como criar um website?'
				lastReviewed='2023-05-20T17:30:43.016Z'
				reviewedBy={{
					type: 'Person',
					name: 'Emanuela Coutinho'
				}}
			/>
			<Banner />
			<Content />
			<Script
				strategy='lazyOnload'
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-H6BP4RCMPS'
			/>
			<Script id='google-tag' strategy='lazyOnload'>
				{`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6BP4RCMPS');`}
			</Script>
		</Fragment>
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

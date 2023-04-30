import {
	GetPageQuery,
	GetPageBySlugQuery
} from 'graphql/generated/graphql'
import { GET_PAGE, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import graphqlClient from 'services/gqlApi'
import ContinentsTemplate from 'templates/Continents'
import { ContinentPageProps } from 'templates/Continents/types'

const ContinentsPage: NextPage<ContinentPageProps> = ({ page }) => {
	const { isFallback } = useRouter()

	if (isFallback) return null

	return <ContinentsTemplate page={page} />
}

export default ContinentsPage

export const getStaticPaths: GetStaticPaths = async () => {
	const { pages } = await graphqlClient.request<GetPageQuery>(GET_PAGE)

	const paths = pages?.map(({ slug }) => ({
		params: { slug }
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { page } = await graphqlClient.request<GetPageBySlugQuery>(
		GET_PAGE_BY_SLUG,
		{
			slug: `${params?.slug}`
		}
	)

	if (!page) return { notFound: true }

	return {
		revalidate: 60 * 60 * 24, //24hr
		props: {
			page
		}
	}
}

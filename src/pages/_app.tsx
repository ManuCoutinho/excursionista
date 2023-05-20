import { Fragment, ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'lib/queryClient'
import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import Layout from 'components/Layout'
import SEO from '../../next-seo.config'
import { theme } from 'styles/theme'
import 'styles/styles.css'
import 'swiper/css/bundle'
import { ReactQueryDevtools } from 'react-query/devtools'
import { GalleryProvider } from 'contexts/GalleryContext'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function MyApp({
	Component,
	pageProps
}: AppPropsWithLayout) {
	const { events } = useRouter()
	const getLayout = Component.getLayout ?? ((page) => page)
	useEffect(() => {
		const handleStart = () => {
			NProgress.start()
		}

		const handleStop = () => {
			NProgress.done()
		}

		events.on('routeChangeStart', handleStart)
		events.on('routeChangeComplete', handleStop)
		events.on('routeChangeError', handleStop)

		return () => {
			events.off('routeChangeStart', handleStart)
			events.off('routeChangeComplete', handleStop)
			events.off('routeChangeError', handleStop)
		}
	}, [events])

	return getLayout(
		<Fragment>
			<DefaultSeo {...SEO} />
			<QueryClientProvider client={queryClient}>
				<GalleryProvider>
					<ChakraProvider theme={theme} resetCSS>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ChakraProvider>
				</GalleryProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Fragment>
	)
}

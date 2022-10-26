import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactElement, ReactNode } from 'react'
import { queryClient } from '../services/QueryClient'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { theme } from '../styles/theme'
import '../styles/styles.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

import { Fragment, FC } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Box, Spinner } from '@chakra-ui/react'
import { BannerContinent } from 'components/BannerContinent'
import { ContinentPageProps } from './types'

const ContinentsTemplate: FC<ContinentPageProps> = ({ page }) => {
  const Content = dynamic(() => import('components/PageContent'))
  const Gallery = dynamic(() => import('components/GridGallery'), {
    loading: () => {
      return <Spinner color='yellow.500' size='lg' />
    }
  })

  return (
    <Fragment>
      <Head>
        <NextSeo
          title={`Excursionista | ${page?.name}`}
          description={page?.bio}
          canonical={process.env.NEXT_PUBLIC_CANONICAL}
          openGraph={{
            url: process.env.NEXT_PUBLIC_CANONICAL,
            title: 'Excursionista',
            description: page?.bio,
            images: [
              {
                url: process.env.NEXT_PUBLIC_PREVIEW || '',
                width: 1280,
                height: 720,
                alt: process.env.NEXT_PUBLIC_ALT
              }
            ]
          }}
        />
      </Head>
      <BannerContinent continent={page?.name} image={page?.cover[0].url} color='yellow.500' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12, 16]} mx='auto'>
        <Content
          text={page?.bio}
          country={page?.numberCountry}
          language={page?.numberLanguage}
          city={page?.numberTopCity}
        />
        <Gallery items={page?.cities} />
      </Box>
    </Fragment>
  )
}
export default ContinentsTemplate

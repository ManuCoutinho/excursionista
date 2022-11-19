import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Spinner } from '@chakra-ui/react'
import { BannerContinent } from 'components/BannerContinent'
import continentBio from 'data/continentBio'
import { DataType } from 'data/types'
import { NextSeo } from 'next-seo'

const ContinentsTemplate: React.FC = () => {
  const router = useRouter()
  const { continent } = router.query
  const [content, setContent] = useState<DataType>()

  const Content = dynamic(() => import('components/PageContent'))
  const Gallery = dynamic(() => import('components/GridGallery'), {
    loading: () => {
      return <Spinner color='yellow.500' size='lg' />
    }
  })

  useEffect(() => {
    switch (continent) {
      case 'africa':
        return setContent(continentBio['africa'])
      case 'europe':
        return setContent(continentBio['europe'])
      case 'asia':
        return setContent(continentBio['asia'])
      case 'oceania':
        return setContent(continentBio['oceania'])
      case 'southAmerica':
        return setContent(continentBio['southAmerica'])
      case 'northAmerica':
        return setContent(continentBio['northAmerica'])
    }
  }, [continent])

  return (
    <Fragment>
      <Head>
        <NextSeo
          title={`Excursionista | ${content?.continent}`}
          description='BODY'
          canonical={process.env.NEXT_PUBLIC_CANONICAL}
          openGraph={{
            url: process.env.NEXT_PUBLIC_CANONICAL,
            title: 'Excursionista',
            description: '',
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
      <BannerContinent continent={content?.name} image={content?.image} color='yellow.500' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12, 16]} mx='auto'>
        <Content
          text={content?.bio}
          country={content?.numberCountry}
          language={content?.numberLanguage}
          city={content?.numberTopCity}
        />
        <Gallery items={content?.cities} />
      </Box>
    </Fragment>
  )
}
export default ContinentsTemplate

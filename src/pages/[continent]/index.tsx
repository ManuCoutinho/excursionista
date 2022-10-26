import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Spinner } from '@chakra-ui/react'
import { BannerContinent } from 'components/BannerContinent'
import continentBio from 'data/continentBio'
import { DataType } from 'data/types'

const ContinentPage: NextPage = () => {
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

  console.log('🍉', content)

  return (
    <>
      <Head>
        <title>{`Excursionista | ${content?.continent}`}</title>
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
    </>
  )
}
export default ContinentPage

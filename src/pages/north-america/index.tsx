import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Spinner } from '@chakra-ui/react'
import { BannerContinent } from '../../components/Continent/Banner'
import { GridCities } from '../../components/Continent/GridCities'

import bio from '../../utils/continentBio'
import citiesInfo from '../../utils/citiesInfos'
import infosBox from '../../utils/infosBox'

const NorthAmerica: NextPage = () => {
  const { northAmerica } = bio
  const { northAmerica: continent } = citiesInfo
  const { northAmerica: infos } = infosBox

  const Content = dynamic(() => import('../../components/Continent/GridContent'))
  const Cities = dynamic(() => import('../../components/Continent/GridCities/GridComponent'), {
    loading: () => {
      return <Spinner color='yellow.500' size='lg' />
    }
  })
  return (
    <>
      <Head>
        <title>Excursionista | América do Norte</title>
      </Head>
      <BannerContinent continent='América do Norte' image='northAmerica/usa' color='yellow.500' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12, 16]} mx='auto'>
        <Content
          text={northAmerica.bio}
          country={infos.numberCountry}
          language={infos.numberLanguage}
          city={infos.numberTopCity}
        />
        <GridCities>
          <Cities items={continent} />
        </GridCities>
      </Box>
    </>
  )
}

export default NorthAmerica

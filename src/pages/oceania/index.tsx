import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Spinner } from '@chakra-ui/react'
import { BannerContinent } from '../../components/Continent/Banner'
import { GridCities } from '../../components/Continent/GridCities'

import bio from '../../utils/continentBio'
import citiesInfo from '../../utils/citiesInfos'
import infosBox from '../../utils/infosBox'

const Oceania: NextPage = () => {
  const { oceania } = bio
  const { oceania: continent } = citiesInfo
  const { oceania: infos } = infosBox

  const Content = dynamic(() => import('../../components/Continent/GridContent'))
  const Cities = dynamic(() => import('../../components/Continent/GridCities/GridComponent'), {
    loading: () => {
      return <Spinner color='yellow.500' size='lg' />
    }
  })

  return (
    <>
      <Head>
        <title>Excursionista | Oceânia</title>
      </Head>
      <BannerContinent continent='Oceânia' image='oceania/oceania' color='gray.50' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12, 16]} mx='auto'>
        <Content
          text={oceania.bio}
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

export default Oceania

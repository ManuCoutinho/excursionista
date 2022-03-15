import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

const Africa: NextPage = () => {
  const bio = `A cultura da África reflete a sua antiga história e é tão diversificada como foi o seu ambiente natural ao longo dos milénios. A África é o território terrestre habitado há mais tempo, e supõe-se que foi neste continente que a espécie tenha surgido. `;

  return (
    <>
      <Head>
        <title>Excursionista | África</title>
      </Head>
      <BannerContinent continent='África' image='africa/africa' color='purple.300' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12]} mx='auto'>
        <GridContent text={bio} country='54' language='1250' city='10' />
        <GridCities
          city='Marrakech'
          country='Marrocos'
          flag='ma'
          img='/assets/continents/africa/marakesh.jpg'
          url='/'
        />
      </Box>
    </>
  );
};

export default Africa;

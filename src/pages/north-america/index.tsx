import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

const NorthAmerica: NextPage = () => {
  const bio = `Um continente com poucos países, mas muitas paisagens e cenários diferentes para ver.`;
  return (
    <>
      <Head>
        <title>Excursionista | América do Norte</title>
      </Head>
      <BannerContinent continent='América do Norte' image='northAmerica/usa' color='yellow.500' />
      <Container maxW='container.lg'>
        <GridContent text={bio} country='3' language='6' city='10' />
        <GridCities
          city='Montreal'
          country='Canadá'
          flag='https://flagcdn.com/w80/ca.png'
          img='/assets/continents/northAmerica/montreal.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default NorthAmerica;

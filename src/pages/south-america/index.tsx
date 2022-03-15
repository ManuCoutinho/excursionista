import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

const SouthAmerica: NextPage = () => {
  const bio = `A cultura sul-americana está presente de diversas maneiras a nível mundial. A cultura indígena 
  de origem pré-colombiana teve forte influência no Peru, Bolívia e algumas regiões da Amazônia.
  Por causa da ampla mistura étnica na América do Sul, a culinária tem influências africanas, asiáticas e europeias.
  O estado brasileiro da Bahia é especialmente conhecido pela influência da culinária da África Ocidental.`;
  return (
    <>
      <Head>
        <title>Excursionista | América do Sul</title>
      </Head>
      <BannerContinent continent='América do Sul' image='latam/latam' color='gray.50' />
      <Container maxW='container.lg'>
        <GridContent text={bio} country='12' language='150' city='8' />
        <Grid as='section' templateColumns='repeat(2, 1fr)' gap={12} my={16}></Grid>
        <GridCities
          city='Punta Cana'
          country='República Dominicana'
          flag='do'
          img='/assets/continents/latam/punta.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default SouthAmerica;

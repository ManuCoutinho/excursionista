import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

type Props = {
  img: string;
  city: string;
  country: string;
  flag: string;
  url: string;
};

const Europe: NextPage = () => {
  const bio = `A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
  ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas
  dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.`;
  return (
    <>
      <Head>
        <title>Excursionista | Europa</title>
      </Head>
      <BannerContinent continent='Europa' image='europe/london' color='gray.50' />
      <Container maxW='container.lg'>
        <GridContent text={bio} country='50' language='60' city='27' />
        <GridCities
          city='Londres'
          country='Reino Unido'
          flag='gb'
          img='/assets/continents/europe/london-card.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default Europe;

import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { BoxInfo } from '../../components/Continent/BoxInfo';
import { ContinentContent } from '../../components/Continent/Content';
import { GridCities } from '../../components/Continent/GridCities';

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
        <title>World Trip | Europa</title>
      </Head>
      <BannerContinent continent='Europa' image='europe/london' />
      <Container maxW='container.lg'>
        <Grid as='section' templateColumns='repeat(2, 1fr)' gap={12} my={16}>
          <ContinentContent text={bio} />
          <BoxInfo country='50' language='60' city='27' />
        </Grid>
        <GridCities
          city='Londres'
          country='Reino Unido'
          flag='https://flagcdn.com/w20/gb.png'
          img='/assets/continents/europe/london-card.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default Europe;

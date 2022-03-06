import { Container, Grid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/Continent/Banner';
import { BoxInfo } from '../../components/Continent/BoxInfo';
import { ContinentContent } from '../../components/Continent/Content';
import { GridCities } from '../../components/Continent/GridCities';

const Europe: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip | Europa</title>
      </Head>
      <BannerContinent continent='Europa' image='europe/london' />
      <Container maxW='container.lg'>
        <Grid as='section' templateColumns='repeat(2, 1fr)' gap={12} my={16}>
          <ContinentContent />
          <BoxInfo />
        </Grid>
        <GridCities />
      </Container>
    </>
  );
};

export default Europe;

import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

const Oceania: NextPage = () => {
  const bio = `A Oceania é chamada de Novíssimo Mundo, pois foi o último continente a ser invadido pelos europeus, que lá chegaram no século XVII.
  Quase todas as ilhas da Oceania têm a população composta majoritariamente por indígenas. `;
  return (
    <>
      <Head>
        <title>Excursionista | Oceânia</title>
      </Head>
      <BannerContinent continent='Oceânia' image='oceania/oceania' color='gray.50' />
      <Container maxW='container.lg'>
        <GridContent country='16' language='18' city='3' text={bio} />
        <GridCities
          city='Aukland'
          country='Nova Zelândia'
          flag='https://flagcdn.com/w80/nz.png'
          img='/assets/continents/oceania/aukland.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default Oceania;

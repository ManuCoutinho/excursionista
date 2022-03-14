import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';

const Asia: NextPage = () => {
  const bio = `A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das 
  partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.
  A cultura da Ásia é o agregado artificial da herança de muitas nacionalidades, sociedades, 
  religiões, e grupos étnicos na região, tradicionalmente chamada um continente de uma perspectiva central ocidental.`;
  return (
    <>
      <Head>
        <title>Excursionista | Ásia</title>
      </Head>
      <BannerContinent continent='Ásia' image='asia/asia' color='gray.50' />
      <Container maxW='container.lg'>
        <GridContent country='50' language='100' city='30' text={bio} />
        <GridCities
          city='Macau'
          country='China'
          flag='https://flagcdn.com/w80/cn.png'
          img='/assets/continents/asia/macau.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default Asia;

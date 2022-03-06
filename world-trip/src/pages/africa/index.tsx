import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { BoxInfo } from '../../components/Continent/BoxInfo';
import { ContinentContent } from '../../components/Continent/Content';
import { GridCities } from '../../components/Continent/GridCities';

const Africa: NextPage = () => {
  const bio = `A cultura da África reflete a sua antiga história e é tão diversificada como foi o seu ambiente natural ao longo dos milénios. A África é o território terrestre habitado há mais tempo, e supõe-se que foi neste continente que a espécie tenha surgido. `;

  return (
    <>
      <Head>
        <title>World Trip | África</title>
      </Head>
      <BannerContinent continent='África' image='africa/africa' color='purple.300' />
      <Container maxW='container.lg'>
        <Grid as='section' templateColumns='repeat(2, 1fr)' gap={12} my={16}>
          <ContinentContent text={bio} />
          <BoxInfo country='54' language='1250' city='10' />
        </Grid>
        <GridCities
          city='Marrakech'
          country='Marrocos'
          flag='https://flagcdn.com/w20/ma.png'
          img='/assets/continents/africa/marakesh.jpg'
          url='/'
        />
      </Container>
    </>
  );
};

export default Africa;

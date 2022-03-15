import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { BannerContinent } from '../../components/Continent/Banner';
import { GridCities } from '../../components/Continent/GridCities';
import { GridContent } from '../../components/Continent/GridContent';
import { GridComponent } from '../../components/Continent/GridCities/GridComponent';
import { GridItems } from '../../components/Continent/GridCities/GridItems';

import { idGenerator } from '../../utils/idGenerator';
import bio from '../../utils/continentBio';
import citiesInfo from '../../utils/citiesInfos';
import infosBox from '../../utils/infosBox';

const Africa: NextPage = () => {
  const { africa } = bio;
  const { africa: continent } = citiesInfo;
  const { africa: infos } = infosBox;
  return (
    <>
      <Head>
        <title>Excursionista | África</title>
      </Head>
      <BannerContinent continent='África' image='africa/africa' color='purple.300' />
      <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12]} mx='auto'>
        <GridContent
          text={africa.bio}
          country={infos.numberCountry}
          language={infos.numberLanguage}
          city={infos.numberTopCity}
        />
        <GridCities>
          <GridComponent>
            {continent.map((info) => {
              return (
                <GridItems
                  city={info.city}
                  country={info.country}
                  flag={info.flag}
                  img={info.image}
                  url={info.path}
                  key={idGenerator()}
                />
              );
            })}
          </GridComponent>
        </GridCities>
      </Box>
    </>
  );
};

export default Africa;

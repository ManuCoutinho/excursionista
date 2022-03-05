import type { NextPage } from 'next';
import Head from 'next/head';
import { BannerContinent } from '../../components/BannerContinent';

const Europe: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip | Europa</title>
      </Head>
      <BannerContinent continent='Europa' image='europe/london' />
    </>
  );
};

export default Europe;

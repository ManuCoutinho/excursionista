import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/BannerHome';
import { MiddleSection } from '../components/MiddleSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Banner />
      <MiddleSection />
    </>
  );
};

export default Home;

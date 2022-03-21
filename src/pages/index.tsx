import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Banner } from '../components/BannerHome';

const Home: NextPage = () => {
  const Content = dynamic(() => import('../components/MiddleSection'));
  return (
    <>
      <Head>
        <title>Excursionista | Home</title>
      </Head>
      <Banner />
      <Content />
    </>
  );
};

export default Home;

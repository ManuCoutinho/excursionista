import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Header />
      <Banner />
    </>
  );
};

export default Home;

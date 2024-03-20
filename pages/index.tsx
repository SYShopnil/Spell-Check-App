import Head from 'next/head';

import { LandingPageView } from '@src/components/view';
const Home = () => {
  return (
    <div>
      <Head>
        <title>IELTS Practice APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPageView />
      </main>
    </div>
  );
};

export default Home;

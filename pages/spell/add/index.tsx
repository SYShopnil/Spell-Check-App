import { AddSpellInputView } from '@src/components/view';
import Head from 'next/head';
import React from 'react';

const AddSpellPage = () => {
  return (
    <div>
      <Head>
        <title>IELTS Practice APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddSpellInputView />
      </main>
    </div>
  );
};

export default AddSpellPage;

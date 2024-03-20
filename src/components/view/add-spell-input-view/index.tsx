import { WordInputBox } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { EMode } from '@src/types/view/landing';
import React from 'react';

export const AddSpellInputView = () => {
  return (
    <Layout mode={EMode.Create}>
      <div className={`mt-[5%]`}>
        <WordInputBox />
      </div>
    </Layout>
  );
};

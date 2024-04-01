import { WordInputBox } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { ELocalStorageKey } from '@src/types/common';
import { EMode } from '@src/types/view/landing';
import React from 'react';

export const LexicalResourceAddView = () => {
  return (
    <Layout mode={EMode.GiveNewSpellMistakeInput}>
      <div className={`mt-[5%]`}>
        <WordInputBox
          mode={ELocalStorageKey.LexicalResourcesList}
          title="Add Word"
        />
      </div>
    </Layout>
  );
};

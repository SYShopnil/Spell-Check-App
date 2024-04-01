import { Layout } from '@src/components/layout';
import { EMode } from '@src/types/view/landing';
import React from 'react';
import { StartButton } from '../../root/start-button';
import { useRouter } from 'next/router';
import { EStartButtonVariant } from '@src/types/root';

export const LandingPageView = () => {
  const route = useRouter();
  const startTestHandler = (mode: EMode) => {
    switch (mode) {
      case EMode.GiveLexicalResourceTest: {
        route.push('/lexicalResources/test');
        break;
      }
      case EMode.GiveSpellMistakeTest: {
        route.push('/spell/test');
        break;
      }
    }
  };
  return (
    <>
      <Layout mode={EMode.Home}>
        <div className={`grid grid-cols-12 gap-3 mt-3`}>
          <div className={`lg:col-span-6 col-span-12 bg-slate-50`}>
            <StartButton
              title="Word Test"
              startTestHandler={() =>
                startTestHandler(EMode.GiveLexicalResourceTest)
              }
              variant={EStartButtonVariant.GreenSolidOnHoverPurpleSolidBg}
            />
          </div>
          <div className={`lg:col-span-6 col-span-12 bg-slate-50`}>
            <StartButton
              title="Spell Test"
              startTestHandler={() =>
                startTestHandler(EMode.GiveSpellMistakeTest)
              }
              variant={EStartButtonVariant.PurpleSolidBgOnHoverGreenSolid}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

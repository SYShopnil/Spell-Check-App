import { WordTestWIthBlackList } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { EMode } from '@src/types/view/landing';
import React, { useState } from 'react';
import { StartButton } from './start-button';

export const LandingPageView = () => {
  const [isTestStart, setIsTestStart] = useState(false);

  return (
    <>
      <Layout mode={EMode.Home}>
        <div>
          {isTestStart ? (
            <div>
              <WordTestWIthBlackList />
            </div>
          ) : (
            <div>
              <StartButton
                startTestHandler={() => {
                  setIsTestStart(!isTestStart);
                }}
                title="Start Test"
              />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

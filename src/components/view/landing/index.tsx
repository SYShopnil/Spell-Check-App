import { WordTestWIthBlackList } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { EMode } from '@src/types/view/landing';
import React, { useState, useEffect } from 'react';
import { StartButton } from './start-button';
import { ELocalStorageKey } from '@src/types/common';

export const LandingPageView = () => {
  const [isTestStart, setIsTestStart] = useState(false);
  const [rootLocalStorageList, setRootLocalStorageList] = useState<string[]>(
    []
  );
  const [customizedLocalStorageList, setCustomizedLocalStorageList] = useState<
    string[]
  >([]);
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentActiveWord, setCurrentActiveWord] =
    useState<string>('colleague');

  const [isRightAnswer, setIsRightAnswer] = useState<boolean | null>(null);
  const answerSubmitHandler = (answerInput: string | string[]) => {
    // for spellCheck time
    typeof answerInput == 'string' &&
      (currentActiveWord.toLowerCase() == answerInput.toLowerCase()
        ? setIsRightAnswer(true)
        : setIsRightAnswer(false));
  };

  const setActiveIndexAndCurrentActiveWord: (list: string[]) => void = (
    list
  ) => {
    const getRadomArrayIndex = Math.floor(Math.random() * list.length);
    // setActiveIndex(getRadomArrayIndex);
    setCurrentActiveWord(list[getRadomArrayIndex]);
    list.splice(getRadomArrayIndex, 1);
    setCustomizedLocalStorageList(list);
  };
  const nextButtonHandler = () => {
    setActiveIndexAndCurrentActiveWord(customizedLocalStorageList);
    setIsRightAnswer(null);
  };
  useEffect(() => {
    const getFullList =
      localStorage.getItem(ELocalStorageKey.SpellCheckList) &&
      JSON.parse(localStorage.getItem(ELocalStorageKey.SpellCheckList) || '');
    if (getFullList) {
      setRootLocalStorageList(getFullList);
      setActiveIndexAndCurrentActiveWord(
        JSON.parse(localStorage.getItem(ELocalStorageKey.SpellCheckList) || '')
      );
    }
  }, []);
  return (
    <>
      <Layout mode={EMode.Home}>
        <div>
          {isTestStart ? (
            <div>
              <WordTestWIthBlackList
                answerSubmitHandler={answerSubmitHandler}
                currentActiveWord={currentActiveWord}
                isRightAnswer={isRightAnswer}
                nextButtonHandler={nextButtonHandler}
                rootLocalStorageList={rootLocalStorageList}
                mode={ELocalStorageKey.SpellCheckList}
                customizedLocalStorageList={customizedLocalStorageList}
              />
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

import { WordTestWIthBlackList } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { EMode } from '@src/types/view/landing';
import React, { useState, useEffect } from 'react';

import { ELocalStorageKey } from '@src/types/common';
import { StartButton } from '@src/components/root';
import { ILexicalSchema } from '@src/types/compound';

export const LexicalResourceTestView = () => {
  const [isTestStart, setIsTestStart] = useState(false);
  const [rootLocalStorageList, setRootLocalStorageList] = useState<string[]>(
    []
  );
  const [showMessage, setShowMessage] = useState<string>('');
  const [rightAnswerList, setRightAnswerList] = useState<string[]>([]);
  const [customizedLocalStorageList, setCustomizedLocalStorageList] = useState<
    ILexicalSchema[]
  >([]);
  const [currentActiveWord, setCurrentActiveWord] =
    useState<string>('colleague');

  const [isRightAnswer, setIsRightAnswer] = useState<boolean | null>(null);

  const answerSubmitHandler = (answerInput: string | string[]) => {
    const expectedAnswer: string[] = rightAnswerList;
    const inputtedAnswer: string[] | string = answerInput;
    const falseAnswerList: string[] = [];
    console.log({
      inputtedField: rightAnswerList,
      hasEmptyField: !new Set(inputtedAnswer).has(''),
    });
    if (!new Set(inputtedAnswer).has('')) {
      Array.isArray(inputtedAnswer) &&
        inputtedAnswer.map((inputAnswer: string) => {
          const isFound = expectedAnswer.find(
            (expectAnswer: string) =>
              expectAnswer.toLowerCase() == inputAnswer.toLowerCase()
          );
          !isFound && falseAnswerList.push(inputAnswer);
        });
      falseAnswerList.length ? setIsRightAnswer(false) : setIsRightAnswer(true);
      falseAnswerList.length &&
        setShowMessage(
          `${falseAnswerList.join(',')} ${
            falseAnswerList.length > 1 ? 'are' : 'is'
          } wrong`
        );
    } else {
      setShowMessage('No Empty field allow!!');
      setIsRightAnswer(false);
    }
  };

  const setActiveIndexAndCurrentActiveWord: (list: ILexicalSchema[]) => void = (
    list
  ) => {
    if (list.length) {
      const getRadomArrayIndex = Math.floor(Math.random() * list.length);
      const randomIndexOfLexicalWordsList = Math.floor(
        Math.random() * list[getRadomArrayIndex].words.length
      );
      const getActiveCurrentWordFromRandomIndex =
        list[getRadomArrayIndex].words[randomIndexOfLexicalWordsList];
      const cloneOfList = [...list];
      setCurrentActiveWord(getActiveCurrentWordFromRandomIndex);
      const rightAnswerList = cloneOfList[getRadomArrayIndex].words.filter(
        (word) =>
          word !==
          cloneOfList[getRadomArrayIndex].words[randomIndexOfLexicalWordsList]
      );
      setRightAnswerList(rightAnswerList);
      cloneOfList.splice(+getRadomArrayIndex, 1);
      setCustomizedLocalStorageList(cloneOfList);
    }
  };

  const nextButtonHandler = () => {
    setActiveIndexAndCurrentActiveWord(customizedLocalStorageList);
    setIsRightAnswer(null);
  };

  useEffect(() => {
    const getFullList =
      localStorage.getItem(ELocalStorageKey.LexicalResourcesList) &&
      JSON.parse(
        localStorage.getItem(ELocalStorageKey.LexicalResourcesList) || ''
      );
    if (Array.isArray(getFullList) && getFullList.length) {
      setRootLocalStorageList(getFullList);
      setActiveIndexAndCurrentActiveWord(
        JSON.parse(
          localStorage.getItem(ELocalStorageKey.LexicalResourcesList) || ''
        )
      );
    }
  }, []);
  return (
    <>
      <Layout
        mode={EMode.GiveLexicalResourceTest}
        title="Lexical Resource Test"
      >
        <div>
          {isTestStart ? (
            <div>
              <WordTestWIthBlackList
                answerSubmitHandler={answerSubmitHandler}
                currentActiveWord={currentActiveWord}
                isRightAnswer={isRightAnswer}
                nextButtonHandler={nextButtonHandler}
                rootLocalStorageList={rootLocalStorageList}
                mode={ELocalStorageKey.LexicalResourcesList}
                customizedLocalStorageList={customizedLocalStorageList}
                answerWordList={rightAnswerList}
                message={showMessage}
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

import { ELocalStorageKey } from '@src/types/common';
import { IWordTestWithBlackList } from '@src/types/compound';

export const MockWordTestWIthBlackListDemoOne: IWordTestWithBlackList = {
  answerSubmitHandler: () => {
    console.log(`hello i am from answer submit handler`);
  },
  currentActiveWord: 'Hello world',
  isRightAnswer: null,
  nextButtonHandler: () => {
    console.log(`Hello this is next button handler`);
  },
  rootLocalStorageList: ['Hello', 'Bye'],
  mode: ELocalStorageKey.SpellCheckList,
  customizedLocalStorageList: ['Hello'],
};

export const MockWordTestWIthBlackListDemoTwo: IWordTestWithBlackList = {
  answerSubmitHandler: () => {
    console.log(`hello i am from answer submit handler`);
  },
  currentActiveWord: 'decrease',
  isRightAnswer: null,
  nextButtonHandler: () => {
    console.log(`Hello this is next button handler`);
  },
  rootLocalStorageList: [
    {
      createAt: Date.now(),
      words: ['increase', 'growth', 'arise'],
    },
    {
      createAt: Date.now(),
      words: ['decrease', 'fall', 'decline'],
    },
  ],
  mode: ELocalStorageKey.LexicalResourcesList,
  customizedLocalStorageList: [
    {
      createAt: Date.now(),
      words: ['increase', 'growth', 'arise'],
    },
  ],
  answerWordList: ['fall', 'decline'],
};

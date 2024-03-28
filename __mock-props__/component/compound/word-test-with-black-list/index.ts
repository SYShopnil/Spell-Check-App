import { ELocalStorageKey } from '@src/types/common';
import { IWordTestWithBlackList } from '@src/types/compound';

export const MockWordTestWIthBlackList: IWordTestWithBlackList = {
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
};

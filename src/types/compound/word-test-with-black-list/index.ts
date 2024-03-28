import { ELocalStorageKey } from '@src/types/common';

export interface IWordTestWithBlackList {
  rootLocalStorageList: string[];
  currentActiveWord: string;
  answerSubmitHandler: (answerInput: string | string[]) => void;
  isRightAnswer: boolean | null;
  nextButtonHandler: () => void;
  mode: ELocalStorageKey;
  answerWordList?: string[];
  customizedLocalStorageList: string[];
}

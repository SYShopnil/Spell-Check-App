import { ELocalStorageKey } from '@src/types/common';

export interface ILexicalSchema {
  words: string[];
  createAt: number;
}
export interface IWordTestWithBlackList {
  rootLocalStorageList: string[] | ILexicalSchema[];
  currentActiveWord: string;
  answerSubmitHandler: (answerInput: string | string[]) => void;
  isRightAnswer: boolean | null;
  nextButtonHandler: () => void;
  mode: ELocalStorageKey;
  answerWordList?: string[];
  customizedLocalStorageList: string[] | ILexicalSchema[];
  message?: string;
}

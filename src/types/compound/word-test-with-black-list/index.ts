export interface IWordTestWithBlackList {
  rootLocalStorageList: string[];
  currentActiveWord: string;
  answerSubmitHandler: () => void;
  isRightAnswer: boolean | null;
  nextButtonHandler: () => void;
}

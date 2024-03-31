/**
 *
 * Demo work
 */

export enum EMode {
  GiveNewSpellMistakeInput = 'GiveNewSpellMistakeInput',
  GiveSpellMistakeTest = 'GiveSpellMistakeTest',
  GiveLexicalResourceTest = 'GiveLexicalResourceTest',
  Home = 'Home',
}
export interface ILandingLayout {
  children?: React.ReactElement;
  mode: EMode;
}

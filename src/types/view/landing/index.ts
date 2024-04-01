/**
 *
 * Demo work
 */

export enum EMode {
  GiveNewSpellMistakeInput = 'GiveNewSpellMistakeInput',
  GiveSpellMistakeTest = 'GiveSpellMistakeTest',
  GiveLexicalResourceTest = 'GiveLexicalResourceTest',
  GiveNewLexicalResourceInput = 'GiveNewLexicalResourceInput',
  Home = 'Home',
}
export interface ILandingLayout {
  title?: string;
  children?: React.ReactElement;
  mode: EMode;
}

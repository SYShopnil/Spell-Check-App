/**
 *
 * Demo work
 */

export enum EMode {
  Create = 'Create',
  Home = 'Home',
}
export interface ILandingLayout {
  children?: React.ReactElement;
  mode: EMode;
}

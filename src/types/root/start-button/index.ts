export enum EStartButtonVariant {
  PurpleSolidBgOnHoverGreenSolid = 'PurpleSolidBgOnHoverGreenSolid',
  GreenSolidOnHoverPurpleSolidBg = 'GreenSolidOnHoverPurpleSolidBg',
}
export interface IStartButton {
  startTestHandler: () => void;
  title: string;
  variant?: EStartButtonVariant;
}

export enum IconName {
  DownArrow = 'DownArrow',
  GraduationCap = 'GraduationCap',
  QuestionSign = 'QuestionSign',
  AiOutlineSound = 'AiOutlineSound',
  ArrowRight = 'ArrowRight',
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}

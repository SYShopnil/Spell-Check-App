import { BtnColorSchema, IRedirectButton } from '@src/types/root';

export const mock_data_redirectButton: IRedirectButton[] = [
  {
    btnText: 'Button Link',
    colorSchema: BtnColorSchema.SolidBgGrayTextViolet,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    dataTestId: 'Redirect Button One',
    isArrow: true,
  },
  {
    btnText: 'Back to Homepage Two',
    colorSchema: BtnColorSchema.SolidBgVioletTextWhite,
    isOpenNewTab: false,
    redirectLink: '',
    dataTestId: 'Redirect Button Two',
    isArrow: false,
  },
];

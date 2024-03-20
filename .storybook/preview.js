/**
 * Import global styles
 */
import '../styles/globals.css';
/**
 * This is necessary to make tailwind work in storybook
 */
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
/**
 * De-optimize Next.js Image in stories
 *
 * @see https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
 */
import * as NextImage from 'next/image';

import { RouterContext } from 'next/dist/shared/lib/router-context';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

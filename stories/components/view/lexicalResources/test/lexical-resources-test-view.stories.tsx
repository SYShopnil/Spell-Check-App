import { LexicalResourceTestView } from '@src/components/view';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/Lexical-Resources/Test',
  component: LexicalResourceTestView,
} as ComponentMeta<typeof LexicalResourceTestView>;

/**
 *
 * Landing Page view Template
 *
 */
const LexicalResourceTestViewTemplate: ComponentStory<
  typeof LexicalResourceTestView
> = (arg) => {
  return (
    <div>
      <LexicalResourceTestView />
    </div>
  );
};

/**
 *
 * DYnamic Check box Demos
 *
 */
export const LexicalResourceTestViewDemoOne =
  LexicalResourceTestViewTemplate.bind({});

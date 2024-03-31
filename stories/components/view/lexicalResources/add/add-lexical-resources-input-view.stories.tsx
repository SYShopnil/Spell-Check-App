import { AddSpellInputView } from '@src/components/view';
import { LexicalResourceAddView } from '@src/components/view/lexicalResources/add';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/Lexical-Resources/Add',
  component: LexicalResourceAddView,
} as ComponentMeta<typeof LexicalResourceAddView>;

/**
 *
 * view Template
 *
 */
const LexicalResourceAddViewTemplate: ComponentStory<
  typeof LexicalResourceAddView
> = () => {
  return (
    <div>
      <LexicalResourceAddView />
    </div>
  );
};

/**
 *
 * DYnamic
 *
 */
export const LexicalResourceAddViewDemo = LexicalResourceAddViewTemplate.bind(
  {}
);

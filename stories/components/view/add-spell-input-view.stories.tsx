import { AddSpellInputView } from '@src/components/view';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/AddSpellInput',
  component: AddSpellInputView,
} as ComponentMeta<typeof AddSpellInputView>;

/**
 *
 * view Template
 *
 */
const AddSpellInputViewTemplate: ComponentStory<typeof AddSpellInputView> = (
  arg
) => {
  return (
    <div>
      <AddSpellInputView />
    </div>
  );
};

/**
 *
 * DYnamic
 *
 */
export const AddSpellInputViewDemo = AddSpellInputViewTemplate.bind({});

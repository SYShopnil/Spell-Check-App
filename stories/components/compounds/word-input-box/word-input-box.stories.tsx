import { WordInputBox } from '@src/components/compound';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Compounds/WordInputBox',
  component: WordInputBox,
  argTypes: {},
} as ComponentMeta<typeof WordInputBox>;

/**
 *
 * Create the template
 *
 */
const WordInputBoxTemplate: ComponentStory<typeof WordInputBox> = (arg) => {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <WordInputBox />
    </div>
  );
};

/**
 *
 * Demo one
 *
 */
export const WordInputBoxDemo = WordInputBoxTemplate.bind({});

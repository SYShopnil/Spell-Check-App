import { WordInputBox, WordTestWIthBlackList } from '@src/components/compound';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Compounds/WordTestWithBlackList',
  component: WordTestWIthBlackList,
  argTypes: {},
} as ComponentMeta<typeof WordTestWIthBlackList>;

/**
 *
 * Create the template
 *
 */
const WordTestWIthBlackListTemplate: ComponentStory<
  typeof WordTestWIthBlackList
> = (arg) => {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <WordTestWIthBlackList />
    </div>
  );
};

/**
 *
 * Demo one
 *
 */
export const WordTestWIthBlackListDemo = WordTestWIthBlackListTemplate.bind({});

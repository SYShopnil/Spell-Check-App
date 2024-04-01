import {
  MockWordTestWIthBlackListDemoOne,
  MockWordTestWIthBlackListDemoTwo,
} from '@root/__mock-props__/component/compound/word-test-with-black-list';
import { WordTestWIthBlackList } from '@src/components/compound';
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
      <WordTestWIthBlackList {...arg} />
    </div>
  );
};

/**
 *
 * Demo one
 *
 */
export const WordTestWIthBlackListDemo = WordTestWIthBlackListTemplate.bind({});
WordTestWIthBlackListDemo.args = MockWordTestWIthBlackListDemoOne;

/**
 *
 * Demo two
 *
 */
export const WordTestWIthBlackListDemoTwo = WordTestWIthBlackListTemplate.bind(
  {}
);
WordTestWIthBlackListDemoTwo.args = MockWordTestWIthBlackListDemoTwo;

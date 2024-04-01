import { WordInputBox } from '@src/components/compound';
import { ELocalStorageKey } from '@src/types/common';
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
      <WordInputBox {...arg} />
    </div>
  );
};

/**
 *
 * Demo one
 *
 */
export const WordInputBoxForSpellCheck = WordInputBoxTemplate.bind({});
WordInputBoxForSpellCheck.args = {
  mode: ELocalStorageKey.SpellCheckList,
  title: 'Add Mistake Word',
};

/**
 *
 * Demo two
 *
 */
export const WordInputBoxForLexicalResource = WordInputBoxTemplate.bind({});
WordInputBoxForLexicalResource.args = {
  mode: ELocalStorageKey.LexicalResourcesList,
  title: 'Add Lexical Resources',
};

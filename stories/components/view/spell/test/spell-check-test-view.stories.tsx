import { SpellCheckTestView } from '@src/components/view';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/Spell/Test',
  component: SpellCheckTestView,
} as ComponentMeta<typeof SpellCheckTestView>;

/**
 *
 * Landing Page view Template
 *
 */
const SpellCheckTestViewTemplate: ComponentStory<typeof SpellCheckTestView> =
  () => {
    return (
      <div>
        <SpellCheckTestView />
      </div>
    );
  };

/**
 *
 * DYnamic Check box Demos
 *
 */
export const SpellCheckTestViewDemoOne = SpellCheckTestViewTemplate.bind({});

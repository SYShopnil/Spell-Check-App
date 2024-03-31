import { LandingPageView } from '@src/components/view';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/Spell/Test',
  component: LandingPageView,
} as ComponentMeta<typeof LandingPageView>;

/**
 *
 * Landing Page view Template
 *
 */
const LandingPageViewTemplate: ComponentStory<typeof LandingPageView> = (
  arg
) => {
  return (
    <div>
      <LandingPageView />
    </div>
  );
};

/**
 *
 * DYnamic Check box Demos
 *
 */
// export const DynamicCheckBoxDemo = LandingPageViewTemplate.bind({});

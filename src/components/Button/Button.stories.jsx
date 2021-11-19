import React from 'react';
import ButtonComponent from './Button';

const Button = (args) => {
  const title = args.title;

  return <ButtonComponent {...args} title={title} />;
};

export const Default = Button.bind({});
Default.args = {
  id: 'field-button',
  title: 'field 1 title',
};

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    // controlled value prop
    title: '',
  },
  // excludeStories: ['searchResults'],
  // subcomponents: { ArgsTable },
};

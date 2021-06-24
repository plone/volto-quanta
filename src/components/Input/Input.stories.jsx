import React from 'react';
import InputComponent from './Input';

const Input = (props) => {
  const [value, setValue] = React.useState(props.value);
  const onChange = (block, value) => setValue(value);

  return <InputComponent {...props} onChange={onChange} value={value} />;
};

export const Empty = (args) => {
  return (
    <Input
      id="field-empty"
      title="field 1 title"
      description="Optional help text"
      placeholder="Type something…"
      required
      {...args}
    />
  );
};

export const Filled = (args) => {
  return (
    <Input
      id="field-filled"
      title="Filled field title"
      description="Optional help text"
      placeholder="Type something…"
      value="Filled with value A"
      required
      {...args}
    />
  );
};

export const Disabled = (args) => {
  return (
    <Input
      id="field-disabled"
      title="Disabled field title"
      description="Optional help text"
      disabled
      {...args}
    />
  );
};

export const Errored = (args) => {
  return (
    <Input
      id="field-errored"
      title="field title"
      description="Optional help text"
      placeholder="Type something…"
      value="Filled with value A"
      error={['This is the error']}
      required
      {...args}
    />
  );
};

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  // excludeStories: ['searchResults'],
  // subcomponents: { ArgsTable },
};

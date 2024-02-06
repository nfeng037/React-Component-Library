import React, { useState } from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from "./Dropdown.types"

const meta: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {},
};
export default meta;

const Template: Story<DropdownProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Dropdown
      {...args}
      value={value}
      onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setValue(e.target.value)}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  disabled: true,
};

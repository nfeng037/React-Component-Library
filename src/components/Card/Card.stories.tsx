import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageurl: 'https://via.placeholder.com/300',
  title: 'Card Title',
  content: 'This is a card description.',
  buttonText: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageurl: 'https://via.placeholder.com/300',
  title: 'Card Title',
  content: 'This is a card description.',
  buttonText: 'Click Me',
  disabled: true,
};

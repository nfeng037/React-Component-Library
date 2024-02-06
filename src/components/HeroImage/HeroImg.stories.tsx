import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeroImage from './HeroImg';
import { HeroImageProps } from './HeroImg.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/1200x400',
  title: 'Welcome to Our Website',
  subtitle: 'Discover our amazing services',
  Text: 'Learn More',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import  { TextProps } from "./Text.types"
import { typeScale } from '../../utils';
import { LabelProps } from '../Label/Label.types';

const meta: Meta = {
  title: "Components/Text",
  component: Text,
  argTypes: {},
};
export default meta;

export const DefaultText: StoryObj<TextProps> = {
  args: {
    types: 'paragraph',
    text: 'Paragraph',
  }
}

export const HeaderText: StoryObj<TextProps> = {
  args: {
    types: 'header',
    text: 'Header Text',
  }
}

export const CopyRightText: StoryObj<TextProps> = {
  args: {
    types: 'copyright',
    text: 'Copyright Text',
  }
}

export const BoldText: StoryObj<TextProps> = {
  args: {
    bold: true,
    text: 'Bold Text',
  }
}

export const ItalicText: StoryObj<TextProps> = {
  args: {
    italic: true,
    text: 'Italic Text',
  }
}

export const DisabledText: StoryObj<LabelProps> = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
};
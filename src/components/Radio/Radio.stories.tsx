import React from 'react';
import { Radio } from './Radio';


export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = () => <Radio id="radio1" name="radio" value="value1" />;
export const Disabled = () => <Radio id="radio2" name="radio" value="value2" disabled />;

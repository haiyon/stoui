import React from 'react';
import Slider from '@stoui/slider/slider';

export default {
  title: 'Form/Slider',
  component: Slider
};

export const WithBar = () => <Slider foo="bar" />;

export const WithBaz = () => <Slider foo="baz" />;

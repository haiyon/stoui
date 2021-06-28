import './slider.scss';

import React from 'react';

import { SliderProps } from './slider.types';

const Slider: React.FC<SliderProps> = ({ foo }) => (
  <div data-testid="slider" className="foo-bar">
    {foo}
  </div>
);

export default Slider;

import './slider.css';

import React, { FunctionComponent } from 'react';

import { SliderProps } from './slider.types';

const Slider: FunctionComponent<SliderProps> = ({ foo }) => (
  <div data-testid="slider" className="foo-bar">
    {foo}
  </div>
);

export default Slider;

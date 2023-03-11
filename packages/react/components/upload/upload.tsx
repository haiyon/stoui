import './upload.css';

import React, { FunctionComponent } from 'react';

import { UploadProps } from './upload.types';

const Upload: FunctionComponent<UploadProps> = ({ foo }) => (
  <div data-testid="upload" className="foo-bar">
    {foo}
  </div>
);

export default Upload;

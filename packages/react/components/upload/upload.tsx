import './upload.css';

import React from 'react';

import { UploadProps } from './upload.types';

const Upload: React.FC<UploadProps> = ({ foo }) => (
  <div data-testid="upload" className="foo-bar">
    {foo}
  </div>
);

export default Upload;

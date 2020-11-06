import React from 'react';
import { UploadProps } from './upload.types';

import './upload.scss';

const Upload: React.FC<UploadProps> = ({ foo }) => (
  <div data-testid="upload" className="foo-bar">
    {foo}
  </div>
);

export default Upload;

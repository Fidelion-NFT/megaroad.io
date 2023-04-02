import React from 'react';

import {
  body,
  container,
} from './styles';

interface Props {
  backgroundColor: string,
  url: string,
}
const ImageBlock = ({ backgroundColor, url }: Props) => (
  <div
    style={{
      ...container,
      backgroundColor,
    }}
  >
    <div style={body}>
      <img
        alt="mobile"
        src={url}
        style={{
          display: 'flex',
          verticalAlign: 'center',
          width: '100%',
        }}
      />
    </div>
  </div>
);

export default ImageBlock;

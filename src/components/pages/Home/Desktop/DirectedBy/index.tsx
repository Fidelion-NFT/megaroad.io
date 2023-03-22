import React, { CSSProperties } from 'react';

import { CDN_URL } from 'constants/values';

import { image1, image2 } from './styles';

interface Props {
  h1?: number,
  h2?: number,
  gap: number,
  style: CSSProperties,
}
const DirectedBy = ({ h1, h2, gap, style }: Props) => (
  <div style={style}>
    <img
      alt="block1"
      src={`${CDN_URL}/202303/block1/block1-4_326x21.png`}
      style={{
        ...image1,
        ...h1 && { height: h1 },
      }}
    />
    <div style={{ minHeight: gap }} />
    <img
      alt="block1"
      src={`${CDN_URL}/202303/block1/block1-3_407x50.png`}
      style={{
        ...image2,
        ...h2 && { height: h2 },
      }}
    />
  </div>
);

export default DirectedBy;

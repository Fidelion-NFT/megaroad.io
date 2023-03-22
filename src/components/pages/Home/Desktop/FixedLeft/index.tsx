import React from 'react';

import { CDN_URL } from 'constants/values';

const FixedLeft = () => (
  <div
    style={{
      cursor: 'pointer',
      left: 70,
      position: 'absolute',
      top: 184,
    }}
  >
    <img
      alt="fixed-left"
      src={`${CDN_URL}/202303/fixed-left_108x201.png`}
      style={{
        height: 201,
        width: 108,
      }}
    />
  </div>
);

export default FixedLeft;

import React from 'react';

import { CDN_URL } from 'constants/values';

import Footer from './Footer';
import Header from './Header';

const blockList = Array.from({ length: 15 }).map((_, idx) => ({
  url: `${CDN_URL}/202303/mobile/${idx + 1}.png`,
}));

const MobileHome = () => (
  <div>
    <Header />
    {blockList.map(({ url }, idx) => (
      <img
        alt="mobile"
        key={idx.toString()}
        src={url}
        style={{
          display: 'flex',
          verticalAlign: 'center',
          width: '100%',
        }}
      />
    ))}
    <Footer />
  </div>
);

export default MobileHome;

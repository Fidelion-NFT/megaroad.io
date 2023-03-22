import React from 'react';

import { CDN_URL } from 'constants/values';

import ImageList from '../ImageList';
import {
  body,
  container,
  image1,
  image2,
  text1,
} from './styles';
import DirectedBy from '../DirectedBy';

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block14-1_424x207.png` },
  { style: image2, url: `${CDN_URL}/202303/block14-2_498x362.png` },
];

const Block14 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <DirectedBy
        h1={17}
        h2={42}
        gap={2}
        style={{
          left: 824,
          position: 'absolute',
          top: 273,
        }}
      />
      <div style={text1}>
        Development{'\n'}
        Stroy writer Hokyo Lim{'\n'}
        Creative Director Hokyo Lim{'\n'}
        Art Director Hokyo Lim{'\n'}
        Artist Hokyo Lim{'\n'}
        Animator Eastone Jang{'\n'}
        UI Artist Rimma Deli{'\n'}{'\n'}

        Production{'\n'}
        VP of production Ryot Seo{'\n'}
        Producer Rizel Lee{'\n'}
        Operator Bella Youn{'\n'}
        Assit. Project Manager MJ Seo{'\n'}
        Talent Acquisition Wade Yang{'\n'}
        Sound Directing Hokyo Lim{'\n'}
        Sound Designer daf{'\n'}
      </div>
    </div>
  </div>
);

export default Block14;

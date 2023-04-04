import React from 'react';

import useBgm from 'hooks/useBgm';

import { container, image1 } from './styles';

const SoundButton = () => {
  const { imageUrl, onToggle } = useBgm();
  return (
    <div style={container}>
      <img
        alt="sound"
        onClick={onToggle}
        src={imageUrl}
        style={image1}
      />
    </div>
  );
};

export default SoundButton;

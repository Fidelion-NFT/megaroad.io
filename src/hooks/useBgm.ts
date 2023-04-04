import { useEffect, useRef, useState } from 'react';
import { CDN_URL_M } from '../constants/values';

const useBgm = () => {
  const audioRef = useRef<any>(null);
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    audioRef.current = new Audio('/audio/bgm-tidalflats.wav');
  }, []);
  const imageUrl = `${CDN_URL_M}/sound-${isOn ? 'on' : 'off'}_40x40.png`;
  return {
    imageUrl,
    onToggle: () => {
      if (!audioRef.current) {
        return;
      }
      if (isOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.loop = true;
      }
      setIsOn(!isOn);
    },
  };
};

export default useBgm;

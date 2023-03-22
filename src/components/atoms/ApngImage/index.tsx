import React, {
  ImgHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import parseAPNG from 'apng-js';

import { getImgBuffer } from './ajax';

interface Props {
  autoPlay?: boolean,
}
const ApngImage = (props: ImgHTMLAttributes<HTMLImageElement> & Props, ref: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const apngRef = useRef<any>(null);
  const { src, ...restProps } = props;
  useImperativeHandle(ref, () => {
    return {
      pause: () => {
        if (playerRef.current && !playerRef.current.paused) {
          playerRef.current.pause();
        }
      },
      play: () => {
        if (playerRef.current && playerRef.current.paused) {
          apngRef.current.numPlays = 0;
          playerRef.current.play();
        }
      },
      stop: () => {
        playerRef.current?.stop();
      },
      stopAtEnd: () => {
        if (apngRef.current) {
          apngRef.current.numPlays = 1;
        }
      },
    };
  }, [src]);
  useEffect(() => {
    if (src) {
      getImgBuffer(src)
        .then((buf) => {
          const apng = parseAPNG(buf);
          if (apng instanceof Error) {
            return;
          }
          const canvas = document.createElement('canvas');
          canvas.width = apng.width;
          canvas.height = apng.height;
          canvas.setAttribute('style', `height: ${props.style?.height}px;width: ${props.style?.width}px;`);
          const context = canvas.getContext('2d');
          if (context && divRef.current) {
            divRef.current?.appendChild(canvas);
            apng.getPlayer(context)
              .then((player) => {
                playerRef.current = player;
                apngRef.current = apng;
                if (props.autoPlay) {
                  player.play();
                }
              });
          }
        });
    }
    return () => {
      if (divRef.current) {
        divRef.current.innerHTML = '';
      }
    };
  }, [src]);
  return (
    <div
      {...restProps}
      ref={divRef}
    />
  );
};

export default forwardRef(ApngImage);

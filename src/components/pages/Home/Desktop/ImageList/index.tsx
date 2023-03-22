import React, { CSSProperties } from 'react';

interface Props {
  imageList: { style: CSSProperties, url: string }[],
}
const ImageList = ({ imageList }: Props) => (
  <>
    {imageList.map(({ style, url }) => (
      <img
        alt="blockx"
        key={url}
        src={url}
        style={style}
      />
    ))}
  </>
);

export default ImageList;

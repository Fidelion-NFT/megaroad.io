import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  backgroundColor: '#DBE000',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#DBE000',
  height: 1030,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 200,
  left: 510,
  position: 'absolute',
  top: 97,
  width: 438,
};

export const box1: CSSProperties = {
  left: 354,
  position: 'absolute',
  top: 297,
};

export const box1Text1: CSSProperties = {
  ...getTextStyle(33, 41, 700),
  color: '#000',
};

export const box1Text2: CSSProperties = {
  ...getTextStyle(18, 21, 700),
  color: '#000',
  whiteSpace: 'pre-line',
  width: 765,
};

export const aImage1: CSSProperties = {
  height: 91,
  width: 98,
};

export const aImage2: CSSProperties = {
  ...aImage1,
  transform: 'scaleX(-1)',
};

export const aImage1Horizontal: CSSProperties = {
  columnGap: 10,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 98px)',
};

export const aImage1Vertical: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'repeat(5, 98px)',
  rowGap: 20,
};

export const aImage1Box1: CSSProperties = {
  left: 210,
  position: 'absolute',
  top: 135,
};

export const aImage1Box2: CSSProperties = {
  position: 'absolute',
  right: 184,
  top: 135,
};

export const aImage1Box3: CSSProperties = {
  left: 210,
  position: 'absolute',
  top: 246,
};

export const aImage1Box4: CSSProperties = {
  position: 'absolute',
  right: 184,
  top: 246,
};

export const aImage3: CSSProperties = { // boss-01.png
  height: 134,
  left: 633,
  position: 'absolute',
  top: 675,
  width: 196,
};

export const aImage4: CSSProperties = { // mon_011_attck.png
  height: 68,
  left: 394,
  position: 'absolute',
  top: 712,
  width: 93,
};

export const aImage5: CSSProperties = { // mon-006.png
  height: 68,
  left: 499,
  position: 'absolute',
  top: 719,
  width: 94,
};

export const aImage6: CSSProperties = {
  height: 55,
  left: 1092,
  position: 'absolute',
  top: 648,
  width: 50,
};

export const aImage7: CSSProperties = {
  height: 57,
  left: 860,
  position: 'absolute',
  top: 716,
  width: 45,
};

export const aImage8: CSSProperties = {
  height: 55,
  left: 935,
  position: 'absolute',
  top: 746,
  width: 50,
};

export const aImage9: CSSProperties = {
  height: 47,
  left: 952,
  position: 'absolute',
  top: 728,
  width: 102,
};

export const aImage10: CSSProperties = {
  height: 50,
  left: 1102,
  position: 'absolute',
  top: 737,
  width: 40,
};

export const aImage11: CSSProperties = {
  height: 50,
  left: 328,
  position: 'absolute',
  top: 729,
  width: 57,
};

export const aImage12: CSSProperties = {
  height: 42,
  position: 'absolute',
  right: 319,
  top: 274,
  width: 67,
};

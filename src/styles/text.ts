type FontWeight = 400 | 500 | 600 | 700;
export const getTextStyle = (fontSize: number, lineHeight: number, fontWeight: FontWeight) => ({
  fontSize,
  fontWeight,
  lineHeight: `${lineHeight}px`,
});

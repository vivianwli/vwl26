export type TabPosition = 'top' | 'bottom';

export const generateTabPath = (
  w: number,
  h: number,
  t: number,
  position: TabPosition,
  tabTextWidth: number = 0
) => {
  const TAB_PADDING = 40;
  const tabW = (tabTextWidth + TAB_PADDING);
  const tabH = 30 * t;
  const r = 8 * t; // corner rounding radius
  const inset = 10 * t;
  const tabLeft = 16;
  const tabRight = 16 + tabW;
  const tabLeftTop = tabLeft + inset;
  const tabRightTop = tabRight - inset;
  const tabCurve = tabH ? (inset * r) / tabH : 0;

  if (position === 'top') {
    return [
      `M 0 0`,
      `L ${tabLeft - r} 0`,
      `Q ${tabLeft} 0 ${tabLeft + tabCurve} ${-r}`,
      `L ${tabLeftTop - tabCurve} ${-tabH + r}`,
      `Q ${tabLeftTop} ${-tabH} ${tabLeftTop + r} ${-tabH}`,
      `L ${tabRightTop - r} ${-tabH}`,
      `Q ${tabRightTop} ${-tabH} ${tabRightTop + tabCurve} ${-tabH + r}`,
      `L ${tabRight - tabCurve} ${-r}`,
      `Q ${tabRight} 0 ${tabRight + r} 0`,
      `L ${w} 0`,
      `L ${w} ${h}`,
      `L 0 ${h}`,
      `L 0 0`,
      `Z`
    ].join(' ');
  }

  return [
    `M 0 0`,
    `L ${w} 0`,
    `L ${w} ${h}`,
    `L ${tabRight + r} ${h}`,
    `Q ${tabRight} ${h} ${tabRight - tabCurve} ${h + r}`,
    `L ${tabRightTop + tabCurve} ${h + tabH - r}`,
    `Q ${tabRightTop} ${h + tabH} ${tabRightTop - r} ${h + tabH}`,
    `L ${tabLeftTop + r} ${h + tabH}`,
    `Q ${tabLeftTop} ${h + tabH} ${tabLeftTop - tabCurve} ${h + tabH - r}`,
    `L ${tabLeft + tabCurve} ${h + r}`,
    `Q ${tabLeft} ${h} ${tabLeft - r} ${h}`,
    `L 0 ${h}`,
    `L 0 0`,
    `Z`,
  ].join(' ');
};

import { useState } from "react";
import BfValues from "../constant/values";

export default function useCarousel(childrenLength: number) {
  const itemCountToShow: number = 3;
  const defaultHeadIndex: number = 0;
  const defaultOffset: string = "0px";

  const [currentHeadIndex, setCurrentHeadIndex] = useState<number>(defaultHeadIndex);
  const [offset, setOffset] = useState<string>(defaultOffset);

  const onClickPrev = () => {
    if (currentHeadIndex - itemCountToShow >= 0) {
      const newIndex: number = currentHeadIndex - itemCountToShow;
      const newOffset: string = newOffsetByIndex(newIndex);

      setCurrentHeadIndex(newIndex);
      setOffset(newOffset);
    } else {
      setCurrentHeadIndex(defaultHeadIndex);
      setOffset(defaultOffset);
    }
  };

  const onClickNext = () => {
    if (currentHeadIndex + itemCountToShow < childrenLength) {
      const newIndex: number = currentHeadIndex + itemCountToShow;
      const newOffset: string = newOffsetByIndex(newIndex);

      setCurrentHeadIndex(newIndex);
      setOffset(newOffset);
    } else {
      setCurrentHeadIndex(defaultHeadIndex);
      setOffset(defaultOffset);
    }
  };

  const newOffsetByIndex = (index: number): string => {
    return `calc((${BfValues.postItemWidth} + 96px) * ${index} * -1)`;
  };

  const hasPrevButton = (): boolean => currentHeadIndex !== defaultHeadIndex;

  const getOpacityByIndex = (index: number): number => {
    const isMainItem: boolean =
      index >= currentHeadIndex && index < currentHeadIndex + itemCountToShow;
    return isMainItem ? 1 : 0.5;
  };

  return { offset, onClickPrev, onClickNext, hasPrevButton, getOpacityByIndex };
}

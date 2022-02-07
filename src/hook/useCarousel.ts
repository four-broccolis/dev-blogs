import { useState } from "react";
import BfValues from "../constant/values";

export default function useCarousel(childrenLength: number) {
  const defaultHeadIndex: number = 0;
  const defaultOffset: string = "0px";

  const [currentHeadIndex, setCurrentHeadIndex] = useState<number>(defaultHeadIndex);
  const [offset, setOffset] = useState<string>(defaultOffset);

  const onClickPrev = () => {
    if (currentHeadIndex - 3 >= 0) {
      const newIndex: number = currentHeadIndex - 3;
      const newOffset: string = newOffsetByIndex(newIndex);

      setCurrentHeadIndex(newIndex);
      setOffset(newOffset);
    } else {
      setCurrentHeadIndex(defaultHeadIndex);
      setOffset(defaultOffset);
    }
  };

  const onClickNext = () => {
    if (currentHeadIndex + 3 < childrenLength) {
      const newIndex: number = currentHeadIndex + 3;
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

  return { offset, onClickPrev, onClickNext, hasPrevButton };
}

import styled from "styled-components";
import BfColors from "../../constant/colors";

import { ReactNode, useState } from "react";
import BfValues from "../../constant/values";

interface Props {
  children: ReactNode[];
}

export default function PostCarousel({ children }: Props) {
  const [currentHeadIndex, setCurrentHeadIndex] = useState(0);
  const [offset, setOffset] = useState("0px");

  const onClickPrev = () => {
    if (currentHeadIndex - 3 >= 0) {
      const newIndex: number = currentHeadIndex - 3;
      const newOffset: string = newOffsetByIndex(newIndex);

      setCurrentHeadIndex(newIndex);
      setOffset(newOffset);
    } else {
      setCurrentHeadIndex(0);
      setOffset("0px");
    }
  };

  const onClickNext = () => {
    if (currentHeadIndex + 3 < children.length) {
      const newIndex: number = currentHeadIndex + 3;
      const newOffset: string = newOffsetByIndex(newIndex);

      setCurrentHeadIndex(newIndex);
      setOffset(newOffset);
    } else {
      setCurrentHeadIndex(0);
      setOffset("0px");
    }
  };

  const newOffsetByIndex = (index: number): string => {
    return `calc((${BfValues.postItemWidth} + 96px) * ${index} * -1)`;
  };

  return (
    <Carousel>
      <CardList offset={offset}>{children}</CardList>
      <Buttons>
        <PrevButton onClick={onClickPrev} />
        <NextButton onClick={onClickNext} />
      </Buttons>
    </Carousel>
  );
}

const Carousel = styled.div`
  width: 100vw;
`;

const CardList = styled.div<{ offset: string }>`
  margin-left: 40px;
  padding: 40px;
  white-space: nowrap;
  transform: translateX(${(props) => props.offset});
  transition: all 1s;

  > * {
    margin: 20px;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  width: calc(100vw - 128px);
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const PrevButton = styled.div`
  transform: scaleX(-1);
  width: 0;
  height: 0;

  opacity: 0.8;
  border-top: 36px solid transparent;
  border-bottom: 36px solid transparent;
  border-left: 36px solid ${BfColors.white};
  cursor: pointer;
`;

const NextButton = styled.div`
  width: 0;
  height: 0;

  opacity: 0.8;
  border-top: 36px solid transparent;
  border-bottom: 36px solid transparent;
  border-left: 36px solid ${BfColors.white};
  cursor: pointer;
`;

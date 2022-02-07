import styled from "styled-components";
import BfColors from "../../constant/colors";

import { ReactNode } from "react";
import useCarousel from "../../hook/useCarousel";

interface Props {
  children: ReactNode[];
}

export default function PostCarousel({ children }: Props) {
  const { offset, onClickPrev, onClickNext, hasPrevButton, getOpacityByIndex } = useCarousel(
    children.length,
  );

  return (
    <Carousel>
      <CardList offset={offset}>
        {children.map((item: ReactNode, index: number) => {
          const opacity: number = getOpacityByIndex(index);
          return <OpacityWrapper opacity={opacity}>{item}</OpacityWrapper>;
        })}
      </CardList>
      <Buttons>
        {hasPrevButton() ? <PrevButton onClick={onClickPrev} /> : <div />}
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
  transition: all 0.8s;

  > * {
    margin: 24px;
  }
`;

const OpacityWrapper = styled.div<{ opacity: number }>`
  display: inline-flex;
  opacity: ${(props) => props.opacity};
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

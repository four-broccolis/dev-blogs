import styled from "styled-components";
import BfColors from "../../constant/colors";

import { ReactNode } from "react";
import useCarousel from "../../hook/useCarousel";
import BfValues from "../../constant/values";

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
          return (
            <OpacityWrapper key={`${index}-${opacity}`} opacity={opacity}>
              {item}
            </OpacityWrapper>
          );
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

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
  animation: moveX 1.3s ease-in-out;

  @keyframes moveX {
    0% {
      opacity: 0;
      transform: translateX(-500px) scale(0.5);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scale(1);
    }
  }
`;

const CardList = styled.div<{ offset: string }>`
  display: flex;
  margin-left: 40px;
  padding: 40px;
  transform: translateX(${(props) => props.offset});

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    height: 80vh;
    flex-direction: column;
    margin-left: 0px;
    padding: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
    justify-content: start;
    transform: translateX(0px);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    margin-left: 0px;
    padding: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
    justify-content: start;
    transform: translateX(0px);
  }

  white-space: nowrap;
  transition: all 0.8s;

  > * {
    margin: 20px;
    @media screen and (max-width: 1200px) {
      margin: 16px 0px 0px 0px;
    }
  }
`;

const OpacityWrapper = styled.div<{ opacity: number }>`
  display: inline-flex;
  opacity: ${(props) => props.opacity};

  @media screen and (max-width: 1200px) {
    width: 40vw;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    opacity: 1;
  }
`;

const Buttons = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    display: none;
  }

  position: absolute;
  top: 50%;
  width: calc(100vw - 128px);
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

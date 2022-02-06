import styled from "styled-components";
import PostItem from "./PostItem";
import BfColors from "../../constant/colors";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode[];
}

export default function PostCarousel({ children }: Props) {
  const currentHeadIndex = useState(0);
  const transformX = useState(0);

  const sliderSettings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    prevArrow: <PrevButton className="slick-arrow" />,
    nextArrow: <NextButton />,
  };

  const onClickPrev = () => {};

  const onClickNext = () => {};

  return (
    // <StyledSlider {...sliderSettings}>
    //   <PostItem />
    //   <PostItem />
    //   <PostItem />
    //   <PostItem />
    //   <PostItem />
    //   <PostItem />
    //   <PostItem />
    // </StyledSlider>
    <Carousel>
      <CardList>{children}</CardList>
      <Buttons>
        <PrevButton onClick={onClickPrev} />
        <NextButton onClick={onClickNext} />
      </Buttons>
    </Carousel>
  );
}

const StyledSlider = styled(Slider)`
  padding: 100px;

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 100vw;
`;

const CardList = styled.span`
  position: relative;
  margin-left: 40px;
  padding: 40px;
  display: block;
  white-space: nowrap;
  overflow: hidden;

  > * {
    margin: 24px;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 47%;
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

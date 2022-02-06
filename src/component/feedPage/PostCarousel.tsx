import styled from "styled-components";
import PostItem from "./PostItem";
import BfColors from "../../constant/colors";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PostCarousel() {
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
    <ArrowAndWindow>
      <PrevButton />
      <Window>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Window>
      <NextButton />
    </ArrowAndWindow>
  );
}

const StyledSlider = styled(Slider)`
  padding: 100px;

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }
`;

const ArrowAndWindow = styled.div`
  display: flex;
  align-items: center;
`;

const Window = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;

  > * {
    margin: 30px;
  }
`;

const PrevButton = styled.div`
  transform: scaleX(-1);
  width: 0;
  height: 0;
  margin-right: 32px;

  opacity: 0.8;
  border-top: 36px solid transparent;
  border-bottom: 36px solid transparent;
  border-left: 36px solid ${BfColors.white};
  cursor: pointer;
`;

const NextButton = styled.div`
  width: 0;
  height: 0;
  margin-left: 32px;

  opacity: 0.8;
  border-top: 36px solid transparent;
  border-bottom: 36px solid transparent;
  border-left: 36px solid ${BfColors.white};
  cursor: pointer;
`;

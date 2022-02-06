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
    <StyledSlider {...sliderSettings}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  padding: 100px !important;

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }
`;

const PrevButton = styled.button`
  transform: scaleX(-1);
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid ${BfColors.white};
`;

const NextButton = styled.div`
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid ${BfColors.white};
`;

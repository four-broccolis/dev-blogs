import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";
import styled from "styled-components";
import PostItem from "./PostItem";

export default function PostCarousel() {
  const settings: CarouselProps = {
    NextIcon: "next",
    navButtonsAlwaysVisible: true,
  };

  return (
    <Wrapper>
      <Carousel {...settings}>
        <PostItem num="1" />
        <PostItem num="2" />
        <PostItem num="3" />
        <PostItem num="4" />
        <PostItem num="5" />
        <PostItem num="6" />
        <PostItem num="7" />
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80vw;
`;

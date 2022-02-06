import { ReactNode } from "react";
import styled from "styled-components";
import PostCarousel from "../component/feedPage/PostCarousel";
import PostItem from "../component/feedPage/PostItem";

export default function FeedPage() {
  const children: ReactNode[] = [
    <PostItem />,
    <PostItem />,
    <PostItem />,
    <PostItem />,
    <PostItem />,
    <PostItem />,
    <PostItem />,
  ];
  return (
    <CarouselWrapper>
      <PostCarousel children={children} />
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  display: flex;
  height: 90%;
  margin: 0 4vw;
  align-items: center;
`;

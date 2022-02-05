import styled from "styled-components";
import PostCarousel from "../component/feedPage/PostCarousel";

export default function FeedPage() {
  return (
    <Wrapper>
      <PostCarousel />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  margin-left: 300px;
`;

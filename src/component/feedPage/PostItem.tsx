import styled from "styled-components";
import BfColors from "../../constant/colors";
import { BfFonts } from "../../constant/styles";
import BfValues from "../../constant/values";
import { Post } from "../../model/post";
import Formatter from "../../util/formatter";
import PlanetImg from './PlanetImg';

export default function PostItem() {
  return (
    <CardLayout className="post-item">
      <Platform>{Post.sample.platform}</Platform>
      <PlanetImage><PlanetImg/></PlanetImage>
      <Title>{Post.sample.title}</Title>
      <Body>{Post.sample.body}</Body>
      <CreatedAt>{Formatter.formatDate(Post.sample.createdAt)}</CreatedAt>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  width: calc(${BfValues.postItemWidth});
  padding: 24px 32px;
  aspect-ratio: 5/7.5;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${BfColors.navy};
  border-radius: 40px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.31));
`;

const Platform = styled.div`
  ${BfFonts.caption};
  width: 100%;
  text-align: start;
`;

const PlanetImage = styled.div`
  width: 45%;
  margin: 16px;
  aspect-ratio: 1/1;
  background-color: ${BfColors.white};
`;

const Title = styled.div`
  ${BfFonts.head}
  width: 100%;
  margin-top: 12px;
  text-align: start;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: ${BfValues.maxTitleLines}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: ${BfValues.maxTitleLines};
    -webkit-box-orient: vertical;
  }
`;

const Body = styled.div`
  ${BfFonts.body}
  margin-top: 15px;
  text-align: start;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: ${BfValues.maxBodyLines}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: ${BfValues.maxBodyLines};
    -webkit-box-orient: vertical;
  }
`;

const CreatedAt = styled.div`
  ${BfFonts.caption};
  width: 100%;
  margin-top: 62px;
  text-align: end;
`;

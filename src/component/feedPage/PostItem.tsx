import styled from "styled-components";
import BfColors from "../../constant/colors";
import { BfFonts } from "../../constant/styles";
import BfValues from "../../constant/values";
import { Post } from "../../model/post";
import Formatter from "../../util/formatter";
import PlanetImg from "./PlanetImg";

interface Props {
  post: Post;
}
export default function PostItem({ post }: Props) {
  const moveToPost = () => {
    const newTab = window.open(post.link, "_blank");
    if (newTab != null) {
      newTab.focus();
    }
  };

  return (
    <ItemLayout className="post-item" onClick={moveToPost}>
      <PlatformAndWriter>
        <Platform>{post.platform}</Platform>
        <Writer>{post.name.substring(0, 3)}</Writer>
      </PlatformAndWriter>
      <PlanetImage>
        <PlanetImg />
      </PlanetImage>
      <Title>{post.title}</Title>
      <Body>{post.description}</Body>
      <CreatedAt>{Formatter.formatDate(post.published)}</CreatedAt>
    </ItemLayout>
  );
}

const ItemLayout = styled.div`
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
  cursor: pointer;

  &:hover {
    background-color: #151527;
    transform: scale(1.05) translateY(-20px);
    transition: 0.2s transform ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    filter: none;
    margin: 0px;
    overflow: hidden;
    aspect-ratio: 5/8;
  }
  @media screen and (max-width: 768px) {
    aspect-ratio: auto;
  }
`;

const PlatformAndWriter = styled.div`
  ${BfFonts.caption};
  @media screen and (max-width: 1200px) {
    ${BfFonts.captionSmall}
  }

  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
`;

const Platform = styled.div`
  text-align: start;
`;

const Writer = styled.div`
  margin-left: 8px;
  text-align: start;
`;

const PlanetImage = styled.div`
  width: 45%;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;

  &:hover {
    animation: rotateSpace 4s infinite;
  }

  @keyframes rotateSpace {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.div`
  ${BfFonts.head}
  @media screen and (max-width: 1200px) {
    ${BfFonts.body}
    font-weight: 400;
  }

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
  @media screen and (max-width: 1200px) {
    ${BfFonts.caption}
  }

  width: 100%;
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
  @media screen and (max-width: 1200px) {
    ${BfFonts.captionSmall}
  }

  width: 100%;
  margin-top: 62px;
  text-align: end;
`;

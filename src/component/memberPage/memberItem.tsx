import { useState } from "react";
import styled, { css } from "styled-components";
import BfColors from "../../constant/colors";
import BfValues from "../../constant/values";

interface Props {
  membData: {
    name: string;
    say: string;
    role: string;
    blog: string;
    id: string;
  };
}

export default function MemberItem({ membData }: Props) {
  const { name, say, role, blog, id } = membData;
  const [isHover, setIsHover] = useState(false);

  const animate = css`
    animation: animate 3.5s linear 1;
  `;
  const Say = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    color: transparent;
    position: relative;
    text-align: start;

    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      color: white;
      -webkit-text-stroke: 0vw #383d52;
      border-right: none;
      overflow: hidden;
      border-right: 2px solid white;

      ${isHover === true ? animate : ""}
    }

    @media screen and (max-width: 1200px) {
      width: 100%;
    }

    @keyframes animate {
      0%,
      10% {
        width: 0;
        border-right: 2px solid transparent;
      }
      70%,
      100% {
        width: 100%;
        border-right: 2px solid transparent;
      }
    }
  `;

  return (
    <CardLayout
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <Name>{name}</Name>
      <MemberImage>
        <Image src={process.env.PUBLIC_URL + `/images/member${id}.png`}></Image>
      </MemberImage>
      <MemInfo>
        <Role>{role}</Role>
        <Say data-text={say}>{say}</Say>
        <BlogURL href={blog} target="_blank">
          {blog}
        </BlogURL>
      </MemInfo>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  width: calc(${BfValues.postItemWidth});
  padding: 24px 10px;
  display: flex;
  opacity: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${BfColors.navy};
  border-radius: 40px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.31));

  &:hover {
    opacity: 100%;
    background-color: #151527;
    transform: scale(1.05) translateY(-20px);
    transition: 0.2s transform ease-in-out;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  margin-bottom: 30px;
`;

const MemberImage = styled.div`
  width: 10vw;
  margin-bottom: 6px;

  cursor: pointer;
`;

const Image = styled.img`
  width: 10vw;
  &:hover {
    transform: rotate(20deg);
    transition: 0.2s transform ease-in-out;
  }
`;
const MemInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Role = styled.div`
  width: 90%;
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
`;

const BlogURL = styled.a`
  width: 100%;
  font-weight: 300;
  color: white;
  font-size: 13px;
  word-wrap: break-word;
  cursor: pointer;
`;

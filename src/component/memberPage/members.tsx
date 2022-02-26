import styled from "styled-components";
import MemberItem from "./memberItem";

export default function Members() {
  const memberData = [
    {
      id: "1",
      name: "수경 / Sookyeongyeom",
      say: "'나는 커서 뭐가 될까?'",
      role: "Back-end",
      blog: "https://sookyeongyeom.github.io/",
    },

    {
      id: "2",
      name: "지윤 / yoon-park",
      say: "'전 INFP예요. 여러분은요?'",
      role: "Back-end",
      blog: "https://github.com/yoon-park",
    },

    {
      id: "3",
      name: "영인 / Broccolism",
      say: "'개발도 좋고 먹는것도 좋아..'",
      role: "Front-end",
      blog: "https://velog.io/@broccolism",
    },

    {
      id: "4",
      name: "준규 / Jun",
      say: "'개발보다 고양이발이 더 귀여워'",
      role: `Front-end`,
      blog: "https://sinbakhae.tistory.com/",
    },
  ];

  return (
    <MemberList>
      {memberData.map((member, index) => (
        <MemberItem key={index} membData={member} />
      ))}
    </MemberList>
  );
}

const MemberList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  animation: moveX 1.3s ease-in-out;
  width: 100vw;
  height: 64vh;

  @keyframes moveX {
    0% {
      opacity: 0;
      transform: translateX(-50px) scale(0.2);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scale(1);
    }
  }

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: scroll;
    height: 100%;

    padding: 30px;
    > * {
      margin: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 80vh;
    justify-content: start;
    align-items: center;
  }
`;

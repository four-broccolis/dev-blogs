import styled from 'styled-components'
import MemberItem from './MemberItem';

export default function Members() {

  const memberData = [
    {
        id: '1',
        name: "수경 / Broccolism",
        say: "'나는 커서 뭐가 될까?'",
        role: "백앤드 담당",
        blog: "https://github.com/sookyeongyeom/TIL"
    },

   {
        id: '2',
        name: "지윤 / Broccolism",
        say: "나는 브로콜리야!, 브로콜리를 사랑하지!",
        role: "백엔드 담당",
        blog: "https://github.com/yoon-park"
    },

    {
      id: '3',
      name: "영인 / Broccolism",
      say: "'개발도 좋고 먹는것도 좋아요..'",
      role: "프론트엔드 담당",
      blog: "https://velog.io@broccolism"
  },
    
   {
        id: '4',
        name: "준규 / JUN",
        say: "'개발보다 고양이발이 더 귀여워'",
        role:`프론트엔드 담당`,
        blog: "https://sinbakhae.tistory.com/"
    }
  ]
  
    return (
      <MemberList>
        {memberData.map((member, index)=> (
        <MemberItem key={index} membData={member}/>
        ))}
      </MemberList>
    )
}

const MemberList = styled.div`
display:flex;
flex-direction: row;
align-items: center;
animation: moveX 1.3s ease-in-out;
  width: 100%;
  height: 70%;
  justify-content: space-around;

  @keyframes moveX {
    0% {
      opacity: 0;
      transform: translateX(-50px) scale(0.5);
    }
    
    100% {
      opacity: 1;
      transform: translateX(0px) scale(1);

    }
  }
  `


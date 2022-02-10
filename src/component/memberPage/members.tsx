import styled from 'styled-components'
import MemberItem from './MemberItem';

export default function Members() {

  interface membData {
    1: Object,
    2: Object,
    3: Object,
    4: Object,
  }
  const memberData: membData = {
    1:{
        id: '1',
        name: "수경 / Broccolism",
        say: "나는 브로콜리야!, 브로콜리를 사랑하지!",
        role: "백앤드 담당",
        blog: "https://github.com/sookyeongyeom/TIL"
    },

   2: {
        id: '2',
        name: "영인 / Broccolism",
        say: "나는 브로콜리야!, 브로콜리를 사랑하지!",
        role: "프론트엔드 담당",
        blog: "https://velog.io@broccolism"
    },

   3: {
        id: '3',
        name: "지윤 / Broccolism",
        say: "나는 브로콜리야!, 브로콜리를 사랑하지!",
        role: "백엔드 담당",
        blog: "https://github.com/yoon-park"
    },
    
    4:{
        id: '4',
        name: "준규 / JUN",
        say: "디자인도 좋고 개발도 좋아요..",
        role:`멤버페이지 구현합니다`,
        blog: "https://sinbakhae.tistory.com/"
    }
  }
    return (
      <MemberList>
        {Object.keys(memberData).map((key)=> (
        <MemberItem key={key} memberData={memberData[key]}/>
        ))}
      </MemberList>
    )
}

const MemberList = styled.div`
display:flex;
flex-direction: row;
align-items: center;
  width: 100%;
  height: 70%;
  justify-content: space-around;
  `
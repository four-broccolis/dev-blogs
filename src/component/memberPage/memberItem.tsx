import styled from 'styled-components'
import BfColors from '../../constant/colors'
import BfValues from '../../constant/values'
import { Post2 } from '../../model/Post2';
import MemberImg from './MemberImg';

export default function MemberItem() {
  
    return (
      <CardLayout>
        <Name>{Post2.sample.name}</Name>
        <MemberImage><MemberImg/></MemberImage>
        <Say>{Post2.sample.say}</Say>
        <Role>{Post2.sample.role}</Role>
        <BlogURL>{Post2.sample.blog}</BlogURL>
      </CardLayout>
    )
}

const CardLayout = styled.div`
  width: calc(${BfValues.postItemWidth});
  padding: 24px 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  background-color: ${BfColors.navy};
  border-radius: 40px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.31));

  &:hover {
    transform: scale(1.03) translateY(-20px);
    transition: 0.2s transform ease-in-out;
  }
`;

const Name = styled.div`
  width: 100%;
`

const MemberImage = styled.div`
  width: 160px;
  height: 160px;
`

const Say = styled.div`
  width:100%;
  font-size: 18px;

`

const Role = styled.div`
  width: 100%;
  font-size: 18px;
  color: red;
`

const BlogURL = styled.div`
  width: 100%;
`
import styled from 'styled-components'
import BfColors from '../../constant/colors'
import BfValues from '../../constant/values'

let card: string;
card = '영인'

export default function MemberItem() {
  
    return (
      <CardLayout>
        <Name>{card}</Name>
        <MemberImg></MemberImg>
        <Say>I'm Brocoli</Say>
        <Charge>PM</Charge>
        <BlogURL>https://velog.io/@broccolism</BlogURL>
      </CardLayout>
    )
}

const CardLayout = styled.div`
  width: calc(${BfValues.postItemWidth});
  padding: 24px 32px;
  aspect-ratio: 5/7.5;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  background-color: ${BfColors.navy};
  border-radius: 40px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.31));
`;

const Name = styled.div`
  width: 100%;
`

const MemberImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
`

const Say = styled.div`
  width:100%;
`

const Charge = styled.div`
  width: 100%;
  font-size: 14px;
  color: red;
`

const BlogURL = styled.div`
  width: 100%;
`
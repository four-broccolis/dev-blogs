import styled from 'styled-components';
import BfColors from '../../constant/colors'
import BfValues from '../../constant/values'
// import { Post2 } from './Post2';
// export class Post2 {
//     name!: string;
//     say!: string;
//     role!: string;
//     blog!: string;

//     static sample: Post2 = {
//         name: "영인/Broccolism",
//         say: "나는 브로콜리야!, 브로콜리를 사랑하지!",
//         role: "프론트엔드 담당",
//         blog: "https://velog.io@broccolism"
//     }
// }

interface Props {
  memberData: {
    name: string
    say: string
    role: string
    blog: string
    id: string
  };
}

export default function MemberItem({memberData}: Props) {
const { name, say, role, blog, id} = memberData;
return (
    <CardLayout>
    <Name>{name}</Name>
    <MemberImage><Image src={process.env.PUBLIC_URL + `/images/member${id}.png`}></Image></MemberImage>
    <Say>{say}</Say>
    <Role>{role}</Role>
    <BlogURL>{blog}</BlogURL>
    </CardLayout>
  
)
}

const CardLayout = styled.div`
  width: calc(${BfValues.postItemWidth});
  padding: 24px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${BfColors.navy};
  border-radius: 40px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.31));

  &:hover {
    transform: scale(1.03) translateY(-20px);
    transition: 0.2s transform ease-in-out;
  }
`

const Name = styled.div`
  font-size: 18px;
  width: 100%;
`

const MemberImage = styled.div`
  width: 160px;
  height: 160px;
  margin: 30px 0;
`

const Image = styled.img`
  width: 160px;
  height: 160px;
`

const Say = styled.div`
  width:90%;
  font-size: 22px;
  margin-bottom: 36px;
`

const Role = styled.div`
  width: 54%;
  font-size: 18px;
  word-wrap: break-word;
  word-break: keep-all;
`

const BlogURL = styled.div`
  width: 100%;
  position: absolute;
  bottom: 36px;
  font-weight: 400;
`
import styled from 'styled-components';

export default function MemberImg() {
    return <Image src={process.env.PUBLIC_URL + `/images/member1.png`}></Image>
}

const Image = styled.img`
  width: 160px;
  height: 160px;
`;

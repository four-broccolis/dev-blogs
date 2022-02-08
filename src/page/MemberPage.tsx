import { ReactNode } from "react";
import styled from 'styled-components'
import MemberItem from '../component/memberPage/memberItem';
import Members from '../component/memberPage/memberItem';

export default function MemberPage() {

  const children: ReactNode[] = [
    <MemberItem />,
    <MemberItem />,
    <MemberItem />,
    <MemberItem />,
  ];

  return (
    <MembersWrapper>
      <Members children={children}/>
    </MembersWrapper>
  );
}

const MembersWrapper = styled.div`
  display: flex;
  height: 90%;
  margin: 0 4vw;
  align-items: center;
`;

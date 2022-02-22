import styled from 'styled-components'
import Members from '../component/memberPage/members';

export default function MemberPage() {
  return (
    <MembersWrapper>
      <Members />
    </MembersWrapper>
  );
}

const MembersWrapper = styled.div`
  display: flex;
  margin: 6vh 7.6vw 0 7.6vw;
  
`;

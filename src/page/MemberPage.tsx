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
  height: 90%;
  margin: 0 7.6vw;
  align-items: center;
`;

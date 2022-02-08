import styled from 'styled-components'
import MemberItem from './memberItem';

// const memberDates = [
//   {name: 영인}
// ]

export default function Members() {
    return (
      <MemberList>
        <MemberItem/>
      </MemberList>
    )
}

const MemberList = styled.div`
width: 100%;
  margin-left: 40px;
  padding: 40px;
  white-space: nowrap;
`;
import { ReactNode } from 'react';
import styled from 'styled-components'

// const memberDates = [
//   {name: 영인}
// ]

interface Props {
  children: ReactNode[];
}

export default function Members({children}:Props) {
    return (
      <MemberList>
        {children}
      </MemberList>
    )
}

const MemberList = styled.div`
display:flex;
  width: 100%;
  height: 70%;
  padding: 40px;
  justify-content: space-around;
  `
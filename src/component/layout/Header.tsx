import styled from "styled-components";
import BfValues from "../../constant/values";
import { BfFonts } from "../../constant/styles";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Row>
      <StyledLink to='/'>
      <FeedPageButton>{BfValues.feedTabName}</FeedPageButton>
      </StyledLink>
      <StyledLink to='/member'>
      <MemberPageButton>{BfValues.memberTabName}</MemberPageButton>
      </StyledLink>
    </Row>
  );
}

const Row = styled.div`
  padding: 24px 48px;
  display: flex;
  justify-content: space-between;
`;

const FeedPageButton = styled.div`
  ${BfFonts.tabNameBold};
  cursor: pointer;

`;

const MemberPageButton = styled.div`
  ${BfFonts.tabName};
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  
`
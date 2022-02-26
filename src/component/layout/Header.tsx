import styled from "styled-components";
import BfValues from "../../constant/values";
import { BfFonts } from "../../constant/styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Row>
      <StyledLink to="/">
        <TabButton>{BfValues.feedTabName}</TabButton>
      </StyledLink>
      <StyledLink to="/member">
        <TabButton>{BfValues.memberTabName}</TabButton>
      </StyledLink>
    </Row>
  );
}

const Row = styled.div`
  padding: 24px 48px;
  @media screen and (max-height: 840px) {
    padding: 16px;
  }
  display: flex;
  justify-content: space-between;
`;

const TabButton = styled.div`
  ${BfFonts.tabNameLarge};
  @media screen and (max-height: 840px) {
    ${BfFonts.tabNameSmall};
  }
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

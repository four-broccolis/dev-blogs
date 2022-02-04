import styled from "styled-components";
import BfValues from "../../constant/values";
import { BfFonts } from "../../constant/styles";

export default function Header() {
  return (
    <Row>
      <FeedPageButton>{BfValues.feedTabName}</FeedPageButton>
      <MemberPageButton>{BfValues.memberTabName}</MemberPageButton>
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

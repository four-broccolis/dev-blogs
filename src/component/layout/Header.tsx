import styled from "styled-components";
import BfColors from "../../constant/colors";
import BfStrings from "../../constant/strings";
import { BfFonts } from "../../constant/styles";

export default function Header() {
  return (
    <Row>
      <FeedPageButton>{BfStrings.feedTabName}</FeedPageButton>
      <MemberPageButton>{BfStrings.memberTabName}</MemberPageButton>
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
  color: ${BfColors.white};
`;

const MemberPageButton = styled.div`
  ${BfFonts.tabName};
  color: ${BfColors.white};
`;

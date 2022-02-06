import styled from "styled-components";

export class BfFonts {
  static head = "font-size: 30px; line-height: 40px;";
  static body = "font-size: 20px; line-height: 30px; font-weight: 300;";
  static caption = "font-size: 16px; line-height: 19px; font-weight: 300;";

  static tabName = "font-size: 36px; line-height: 42px;";
  static tabNameBold = "font-weight: bold; font-size: 40px; line-height: 47px;";
}

export const BfBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      117.58deg,
      rgba(251, 122, 255, 0.85) 15.51%,
      rgba(215, 70, 220, 0.403125) 45.23%,
      rgba(224, 83, 228, 0.377083) 70.49%,
      rgba(247, 0, 255, 0) 96.34%
    ),
    linear-gradient(134.81deg, #2799ff 28.89%, #a800ab 117.25%);
`;

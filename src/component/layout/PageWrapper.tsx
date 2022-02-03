import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Background>
      <Header />
      {children}
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(
      117.58deg,
      rgba(251, 122, 255, 0.85) 15.51%,
      rgba(215, 70, 220, 0.403125) 45.23%,
      rgba(224, 83, 228, 0.377083) 70.49%,
      rgba(247, 0, 255, 0) 96.34%
    ),
    linear-gradient(134.81deg, #2799ff 28.89%, #a800ab 117.25%);
`;

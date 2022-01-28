import React from "react";
import styled from "styled-components";

interface TestProps {
  text: string;
}

export const Test = ({ text }: TestProps) => {
  return (
    <div>
      <Title>{text}</Title>
    </div>
  );
};

const Title = styled.div`
  color: blue;
`;

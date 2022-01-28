import React from "react";
import styled from "styled-components";
import { Test } from "./component/test";

function App() {
  return (
    <div>
      <Test text="Hello, react"></Test>
    </div>
  );
}

const TestDiv = styled.div`
  color: red;
`;

export default App;

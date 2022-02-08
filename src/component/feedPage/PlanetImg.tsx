import React from "react";
import styled from "styled-components";

export default function PlanetImg<T>(props: T) {
  let randomNumber: number = Math.floor(Math.random() * 10);
  return <Image src={process.env.PUBLIC_URL + `/images/planet${randomNumber}.png`}></Image>;
}

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

import styled from "styled-components";

export default function PlanetImg<T>(props: T) {
  let imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  let newNum = [];
  while (imageArray.length > 17) {
    let moveNum = imageArray.splice(Math.floor(Math.random() * imageArray.length))[0];
    newNum.push(moveNum);
  }
  return <Image src={process.env.PUBLIC_URL + `/images/planet${newNum}.png`}></Image>;
}

const Image = styled.img`
  width: 135px;
  height: 135px;
`;

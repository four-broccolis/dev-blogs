import styled from "styled-components";

export default function PlanetImg<T>(props: T) {
  let imageArray = [1,2,3,4,5,6,7,8,9,10];
  let newNum = []
  while(imageArray.length > 9){
    let moveNum =imageArray.splice(Math.floor(Math.random() * imageArray.length))[0]
    console.log(moveNum)
    newNum.push(moveNum)
  }
  console.log(newNum)
  return <Image src={process.env.PUBLIC_URL + `/images/planet${newNum}.png`}></Image>;
}

const Image = styled.img`
  width: 135px;
  height: 135px;
`;

import styled from "styled-components";
import backgroundPic from "../pics/pics.jpg";

const Body = styled.div`
  background-color: #fdfdfd
  margin: 0
  padding: 0
`;
const Main = styled.div`
  display: flex
  flex-direction: column
  height: 100vh
  width: 100vw
  justify-content: center
  align-items: center
  background: url(${backgroundPic}) no-repeat center center
  background-size: cover
`;

const MainText = styled.h1`
  font-size: 3vw;
  font-weight: bold
  color: white
`;

export { Body, Main, MainText };

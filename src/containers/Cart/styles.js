// src/pages/Cart/styles.js
import styled from "styled-components";
import texture from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
  background: url("${texture}");
  width: 100%;
  background-position: center;
  background-color: #1f1f1f;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 180px;
  img {
    height: 130px;
  }
`;

export const Container = styled.div`
  background: url('${Background}') no-repeat center center / cover;
  min-height: 100vh;

  width: 100%;
  background-color: #f0f0f0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme. gren};;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme. gren};;
  }
`;
export const Content = styled.div`
display: flex;
flex-direction: row;
width: 90%;
max-width: 1200px;
margin: 0 auto;
gap: 20px;

@media (max-width: 770px) {
    flex-direction: column;
     padding: 20px;
  }
`;
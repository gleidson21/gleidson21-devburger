// src/pages/Home/styles.js
import styled from "styled-components";
import Background from "../../assets/background.svg";
import BannerHome from "../../assets/banner.svg";

export const Banner = styled.div`
 background: url("${BannerHome}");
 background-size: cover;
 background-position: center;
 height: 480px;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 

  @media (max-width: 470px) {
    width: 100%;
    min-height: auto;
  }

 h1 {
  font-family: "Road Rage", sans-serif;
  font-weight: 700;
  font-size: 80px;
  position: absolute;
  line-height: 1;
  color: ${(props) => props.theme.white};

 }

`;

export const Container = styled.div`
background-image: url("${Background}");
 background-size: cover;
 background-position: center;
 min-height: 100vh;
 width: 100%;
  @media (max-width: 440px) {
    width: 100%;
    min-height: auto;
  }

  
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;


`;

export const Title = styled.h2`
text-align: center;
 font-weight: 800;
 font-size: 32px;
 color: ${(props) => props.theme.purple};;
 margin: 50px 0 20px;
 padding-bottom: 12px;
 position: relative;

 &::after {
  content: "";

 position: absolute;
 width: 56px;
  height: 4px;
  background-color: ${(props) => props.theme.purple};;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 }
`;
export const Title2 = styled.h2`
text-align: center;
 font-weight: 800;
 font-size: 32px;
 color: ${(props) => props.theme. gren};;
 margin: 50px 0 20px;
 padding-bottom: 12px;
 position: relative;

 &::after {
  content: "";

 position: absolute;
 width: 56px;
  height: 4px;
  background-color: ${(props) => props.theme. gren};;
 bottom: 0;
 left: 50%;
 transform: translateX(-50%);
 }
`;
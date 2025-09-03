// src/components/Footer/styles.js

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: ${(props) => props.theme.white};;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
   width: 100%;
  font-family: Arial, sans-serif;
  border-top: 2px solid #333;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-width: 200px;

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #f7a800;
  }

  p, a {
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    line-height: 1.5;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  a {
    color: ${(props) => props.theme.white};;
    font-size: 24px;
    transition: color 0.2s;

    &:hover {
      color: #f7a800;
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 30px;
  font-size: 12px;
  color: #888;
`;
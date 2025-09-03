// src/components/CategoriesCarousel/styles.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px; // Adiciona espaçamento abaixo do carrossel

 
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.imageUrl}), no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px; // Diminuído para um tamanho menor
  width: 95%;
  // Adiciona um tamanho máximo
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  
`;

export const Categorybutton = styled.button`

position: relative;
    z-index: 2;
    color: ${(props) => props.theme.white};
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 30px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 22.5px;
    margin-top: 50px;
    text-decoration: none;

    &:hover{
      background-color: ${(props) => props.theme.purple};;
    }`
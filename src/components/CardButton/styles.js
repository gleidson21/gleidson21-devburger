// src/components/CardButton/styles.js
import styled from "styled-components";

export const ContainerButton = styled.button` /* Mudei de 'div' para 'button' */
  background-color: ${(props) => props.theme.purple};;
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  font-size: 30px; /* Isso afeta o tamanho do texto, mas você está usando um ícone */
  color: ${(props) => props.theme.white};fff;
  cursor: pointer;
  
  display: flex; /* Habilita o flexbox para alinhamento */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */

  &:hover {
    background-color: #6f357c;
  }

  img { /* Estilo para o ícone SVG dentro do botão */
    width: 24px;
    height: 24px;
  }
`;
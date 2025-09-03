import styled from "styled-components";

export const ContainerCard = styled.div`
  margin-bottom: 20px;
  height: 300px;
  margin-left:10px;
  background-color: ${(props) => props.theme.white};
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
  width: 90%; /* Garante que o card ocupe 100% do espaço da sua célula na grade. */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 50%; 
    padding: 10px;
    margin-top:5x;/* A imagem agora preenche toda a largura do card. */
     height: 100px;/* Altura fixa para consistência visual entre as imagens. */
    object-fit: cover; /* Garante que a imagem preencha a área sem distorção. */
  }

  @media (max-width: 300px) {
    width: 100%;
    min-height: auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
  padding: 10px; /* Adiciona espaçamento interno para o conteúdo. */
  width: 100%;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.orange};;
    margin: 0;
  }

  .price {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.black};;
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: auto;
  }
`;

export const SpacingContainer = styled.div`
  width: 100%;
  margin-top: auto; /* Empurra o botão para a parte inferior do card. */
`;

export const BuyButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: #8a2be2;
    color: white;
    border-radius: 50px;
    width: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6a1ba3;
    }
  }
`;
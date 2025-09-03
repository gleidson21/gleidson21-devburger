import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .carousel-item-padding{
    padding: 0 10px;
  }
  @media (max-width: 464px) {
    .carousel-item-padding {
      padding: 0 10px; // Aumentado para 10px para garantir espaçamento
    }
  }
`;
import styled from "styled-components";
import Background from "../../assets/banners.svg"; // Não está sendo usado, pode remover
import patternBackground from '../../assets/background.svg';


// Ajuste principal: O padrão de fundo é aplicado a um novo componente que envolve o conteúdo

export const Container = styled.div`
  /* Container principal agora é mais leve, apenas para layout */
  width: 100%;
  max-width: 1798px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
  ), url(${Background}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 480px;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 15%;
    top: 90px;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: 40px;
      text-align: left;
    }
    
    @media (max-width: 480px) {
      font-size: 35px;
      line-height: 30px;
    }
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};;
    font-size: 20px;
    font-weight: 400;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const MainContentWrapper = styled.div`
 
  background-repeat: repeat;
  background-color: #f0f0f0; /* Cor de fundo principal */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


export const CategoryMenu = styled.div`
 background-image: url("${patternBackground}");
 width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  gap: 10px;
  background-color: transparent; /* Certifique-se de que não tem fundo */
  
  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap; 
  }
`;

export const CategoryTitle = styled.h2`
  align-items: center;
  margin-left: 40%;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme. gren};;
  margin-bottom: 10px;
`;

export const CategoryButton = styled.button`
  background: none;
  border: none;
  margin-left: 30px;
  color: ${(props) => props.theme.purple ? props.theme.purple : '#696969'};
  font-size: 24px;
  font-weight: 500;
  line-height: 15px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${props.theme.purple ? props.theme.purple : '#696969'}` : 'none'};
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductsContainer = styled.div`
 background-image: url("${patternBackground}");
  background-color: transparent;
  display: grid;
  grid-auto-rows: 1fr;
  gap: 20px;
  width: auto;
  justify-items: center;
  padding: 30px;
  
  grid-template-columns: repeat(2, 1fr);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;
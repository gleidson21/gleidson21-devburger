import styled from "styled-components";


export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-between;
  
  margin-bottom: 10px;
  * {
    color: ${(props) => props.theme.secondBlack};;
    font-weight: 500;
  }
`;

export const TopContainer = styled.div`
  background-color: ${(props) => props.theme.secondBlack};;
  display: grid;
  grid-gap: 20px 50%;
  padding: 13px;
  border-radius: 20px 20px 0 0;
  text-align: center;

 
    border-top-right-radius: 20px;


    border-top-left-radius: 20px;

`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.white};;
  margin: 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  
  
  &:last-of-type {
    border-bottom: none;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  margin-top: 15px;
 

  p {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;
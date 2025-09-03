import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 62px;
  object-fit: cover;
  border-radius: 8px;
`;

export const TableQuantityButton = styled.button`
  background-color: #6a1ba3;
  color: #fafafaff;
  border: 1px solid #cdcbcbff;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0 8px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #9c3dc8ff;
  }
`;

export const TrasImage = styled.img`
  height:  auto;
  width: 20%;
  cursor: pointer;
`;





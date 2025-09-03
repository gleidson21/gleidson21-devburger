import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  gap: 10px;
  border-collapse: collapse;
  background-color: #f7f7f7;
  border-radius: 30px;
`;

export const Header = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Tr = styled.tr`
  @media (max-width: 768px) {
    display: block;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
  }
`;

export const Th = styled.th`
  padding: 16px;
  &:last-child {
    border-top-right-radius: 20px;
  }
  &:first-child {
    border-top-left-radius: 20px;
  }
  text-align: left;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 115%;
  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: 45%;
      text-align: left;
      font-weight: bold;
      color: #718096;
    }
  }
`;

export const Body = styled.tbody`
  @media (max-width: 768px) {
    display: block;
  }
`;

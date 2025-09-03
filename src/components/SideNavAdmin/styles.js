import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2b2b2b;
  width: 240px;
  height: 100vh;
 display: flex;
  flex-direction: column;
  padding: 20px;
  left: 0;
  top: 0;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 150px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  transition: background-color 0.3s;

  &.active,
  &:hover {
    background-color: #9758a6;
  }

  svg {
    font-size: 1.2rem;
    margin-right: 15px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const LogoutLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #9758a6;
  }

  svg {
    font-size: 1.2rem;
  }
`;
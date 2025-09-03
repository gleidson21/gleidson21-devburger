import styled, { css } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Container = styled.header`
    background-color: ${(props) => props.theme.mainBlack};
    color: ${(props) => props.theme.white};;
     width: auto;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    
    font-family: Arial, sans-serif;
    border-bottom: 2px solid #333;
    align-items: center;
    @media (max-width: 768px) {
        padding: 10px 15px;
    }
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 30px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(RouterNavLink)`
    color: #fefcfcff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    
    &:hover {
        color: #f7a800;
    }

    &.active {
      color: #f7a800;
      font-weight: bold;
      border-bottom: 2px solid #f7a800;
    }
`;

export const UserActions = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    .user-icon {
        font-size: 24px;
    }
`;

export const UserContent = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 14px;
        color: #f7a800;
        font-weight: 600;
    }
`;

export const LogoutLink = styled.a`
    font-size: 12px;
    color: #e22424ff;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const OrdersIcon = styled.div`
    position: relative;
    font-size: 24px;
    cursor: pointer;
    
    .bag-icon {
        color: ${(props) => props.theme.white};;
        font-size: 24px;
    }
    
    &:hover .bag-icon {
        color: #f7a800;
    }
`;

export const OrderCount = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #f7a800;
    color: ${(props) => props.theme.white};;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
`;

export const HamburgerMenu = styled.div`
    width: 25px;
    height: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    z-index: 1001;

    span {
        width: 100%;
        height: 2px;
        background: ${(props) => props.theme.white};;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        display: flex;
    }

    ${({ isOpen }) => isOpen && css`
        span:nth-child(1) {
            transform: rotate(45deg) translate(4px, 4px);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:nth-child(3) {
            transform: rotate(-45deg) translate(4px, -4px);
        }
    `}
`;

export const MobileMenu = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50px;
    right: 0;
    width: 200px;
    height: calc(100vh - 70px);
    background: #1a1a1a;
    padding: 20px;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

h4{
 margin: 0;
}
    span{
margin-top: 8px;
        cursor: pointer;
         color: #e22424ff;
    }

    @media (min-width: 769px) {
        display: none;
    }

    ${({ isOpen }) => isOpen && css`
        transform: translateX(0);
    `}
`;

export const MobileNavLink = styled(RouterNavLink)`
    font-size: 18px;
    margin-bottom: 15px;
    color: #fbf9f9ff;
    text-decoration: none;
    
    &:hover {
        color: #f7a800;
    }

    &.active {
      color: #f7a800;
      font-weight: bold;
    }
`;
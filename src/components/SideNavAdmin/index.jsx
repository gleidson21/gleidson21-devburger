import React from 'react';
import { NavLink as RouterNavLink, useNavigate, useLocation } from 'react-router-dom';
import { Container, LogoContainer, NavLinks, NavLink, Footer, LogoutLink } from './styles';
import { FiShoppingBag, FiPackage, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { useUser } from '../../hooks/UserContext';
import Logo from "../../assets/Logo.svg";

export function SideBar() {
    const { signOut } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    };

    const isAdmin = location.pathname.startsWith('/admin');

    return (
        <Container>
            <LogoContainer>
               <img src={Logo}></img>
            </LogoContainer>

            <NavLinks>
                {isAdmin && (
                    <>
                        <NavLink
                            as={RouterNavLink}
                            to="/admin/pedidos"
                            $isActive={location.pathname === '/admin/orders'}
                        >
                            <FiShoppingBag />
                            Pedidos
                        </NavLink>
                        <NavLink
                            as={RouterNavLink}
                            to="/admin/produtos"
                            $isActive={location.pathname === '/admin/products'}
                        >
                            <FiPackage />
                            Produtos
                        </NavLink>
                        <NavLink
                            as={RouterNavLink}
                            to="/admin/novos-produtos"
                            $isActive={location.pathname === '/admin/product'}
                        >
                            <FiPlusCircle />
                            Adicionar produto
                        </NavLink>
                    </>
                )}
            </NavLinks>

            <Footer>
                <LogoutLink onClick={handleSignOut}>
                    <FiLogOut />
                    Sair
                </LogoutLink>
            </Footer>
        </Container>
    );
}
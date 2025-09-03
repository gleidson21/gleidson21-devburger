import React, { useState } from "react";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import {
  Container,
  NavLinks,
  UserContent,
  UserProfile,
  UserActions,
  NavLink,
  OrdersIcon,
  OrderCount,
  LogoutLink,
  HamburgerMenu,
  MobileMenu,
  MobileNavLink,
} from "./styles";
import { useUser } from "../../hooks/UserContext.jsx";
import { useCart } from "../../hooks/CartContext.jsx"; // 1. Importe o useCart
import { FiUser, FiShoppingBag } from "react-icons/fi";

export function Header({isOpen}) {
  const { user, signOut } = useUser();
  const { cartProducts } = useCart(); // 2. Obtenha os produtos do carrinho
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Calcule o total de itens somando as quantidades de cada produto
  const totalItems = cartProducts.reduce((sum, product) => sum + product.quantity, 0);

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container  $isOpen={isOpen}>
      <NavLinks>
        <NavLink as={RouterNavLink} to="/">Home</NavLink>
        <NavLink as={RouterNavLink} to="/cardapio">Cardapio</NavLink>
      </NavLinks>

      <UserActions>
        {user ? (
          <UserProfile>
            <FiUser className="user-icon" />
            <UserContent>
              <span>Olá, {user.name.split(" ")[0]}</span>
              <LogoutLink onClick={handleSignOut}>Sair</LogoutLink>
            </UserContent>
          </UserProfile>
        ) : (
          <NavLink as={RouterNavLink} to="/login">Entrar</NavLink>
        )}

        <OrdersIcon as={RouterNavLink} to="/cart"> {/* 5. Adicione um link */}
          <FiShoppingBag className="bag-icon" />
          <OrderCount>{totalItems}</OrderCount> {/* 4. Substitua o valor fixo pelo totalItems */}
        </OrdersIcon>
      </UserActions>

      <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink as={RouterNavLink} to="/" onClick={toggleMenu}>Home</MobileNavLink>
        <MobileNavLink as={RouterNavLink} to="/cardapio" onClick={toggleMenu}>Cardapio</MobileNavLink>
                    
        {user ? (
          <>
            <h4 className="mobile-user">Olá, {user.name.split(" ")[0]}</h4>
            <span className="mobile-sign-out" onClick={() => { handleSignOut(); toggleMenu(); }}>Sair</span>
          </>
        ) : (
          <MobileNavLink as={RouterNavLink} to="/login" onClick={toggleMenu}>Entrar</MobileNavLink>
        )}
      </MobileMenu>
    </Container>
  );
}
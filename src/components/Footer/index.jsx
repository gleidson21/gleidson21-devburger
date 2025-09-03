// src/components/Footer/index.jsx

import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialIcons,
  Copyright
} from "./style";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre Nós</h3>
          <p>
            O DevBurger é o lugar para os amantes de hambúrguer. Oferecemos os mais deliciosos e suculentos hambúrgueres artesanais.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Links Úteis</h3>
          <a href="/cardapio">Cardápio</a>
          <a href="#">Pedidos</a>
          <a href="#">Login</a>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>Email: contato@devburger.com</p>
          <p>Telefone: (92) 99999-9999</p>
          <p>Endereço: Rua dos Códigos, 123 - Manaus, AM</p>
          <SocialIcons>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} DevBurger. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}
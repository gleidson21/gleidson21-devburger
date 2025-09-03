// src/pages/Cart/index.jsx
import Logo from '../../assets/Logo.svg';
import { CartItem, CartResume } from '../../components';
import { Container, Banner, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>

      <Banner>
        <img src={Logo} alt='logo-devburguer' />
      </Banner>
      <Title>Checkout - pedidos</Title>

      <Content>
         
        <CartItem />
          <CartResume />
      </Content>
     
    </Container>
  );
}
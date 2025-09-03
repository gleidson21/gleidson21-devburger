// src/pages/Home/index.jsx
import { CategoriesCarousel } from "../../components/CategoriesCarousel/index.jsx";
import { OffersCarousel } from "../../components/OffersCarousel/index.jsx";
 // Importe o componente Header
import { Banner, Container, Content, Title, Title2 } from "./style";
import BannerHome from '../../assets/banner.svg';
import { Footer } from '../../components/Footer/index.jsx';

export function Home() {
  return (
    <main>

      <Banner backgroundUrl={BannerHome}>
        <h1>Bem-vindo(a)!</h1>
      </Banner>

      <Container>
        <Content>
          <Title>Categorias</Title>
          <CategoriesCarousel />
          <Title2>Ofertas do Dia</Title2>
          <OffersCarousel />
        </Content>
      </Container>
        <Footer />
    </main>
  );
}
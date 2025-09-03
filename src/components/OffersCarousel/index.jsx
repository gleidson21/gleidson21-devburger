import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { api } from "../../services/api";
import "react-multi-carousel/lib/styles.css";
import { Container } from "./style";
import { CardProduct } from "../CardProduct";
import { FormaPrice } from "../../utils/FormatPrice";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/products");
      const onlyOffers = data.filter((product) => product.offer).map(product => ({
        currencyValue: FormaPrice(product.price),
        ...product,
      }));
      setOffers(onlyOffers);
    }
    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, slidesToSlide: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 },
  };

  return (
    <Container>
      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-0">
        {offers.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
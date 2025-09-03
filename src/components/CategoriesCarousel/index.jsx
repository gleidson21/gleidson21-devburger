// src/components/CategoriesCarousel/index.jsx
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { api } from "../../services/api";
import "react-multi-carousel/lib/styles.css";
import { Container, ContainerItem, Categorybutton } from "./style";
import { useNavigate } from "react-router-dom";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 2 },
  };

  return (
    <Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        itemClass="carousel-item-padding-10-px"
      >
        {categories.map((category) => (
          <ContainerItem key={category.id} imageUrl={category.url}>
            <Categorybutton
              onClick={() => {
                navigate("/cardapio", {
                  state: { 
                    categoryId: category.id,
                    categoryName: category.name
                  }
                });
              }}
            >
              {category.name}
            </Categorybutton>
          </ContainerItem>
        ))}
      </Carousel>
    </Container>
  );
}
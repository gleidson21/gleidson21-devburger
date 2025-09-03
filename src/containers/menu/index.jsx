// src/pages/Menu/index.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
  CategoryTitle
} from "./styles";
import { api } from "../../services/api";
import { FormaPrice } from "../../utils/FormatPrice";
import { CardProduct } from "../../components/CardProduct";



export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOfferFilterActive, setIsOfferFilterActive] = useState(false);
  
  // **AQUI ESTÁ O ERRO: VOCÊ PRECISA DECLARAR 'activeCategory'**
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryparams = new URLSearchParams(search); 

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryparams.get("categoria");
    return categoryId || 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");
      const newProducts = data.map((product) => ({
        currencyValue: FormaPrice(product.price),
        ...product,
      }));
      setProducts(newProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    let newFilteredProducts = products;

    // Filtra por categoria primeiro, se uma estiver ativa
    if (activeCategory !== 0) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.category_id === activeCategory
      );
    }

    // Aplica o filtro de ofertas se o estado estiver ativo
    if (isOfferFilterActive) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.offer
      );
    }

    setFilteredProducts(newFilteredProducts);
  }, [products, activeCategory, isOfferFilterActive]);

  const handleToggleOfferFilter = () => {
    setIsOfferFilterActive(!isOfferFilterActive);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setIsOfferFilterActive(false); // Desativa o filtro de oferta ao mudar a categoria
    navigate({
      pathname: "/cardapio",
      search: `?categoria=${categoryId}`,
    }, { replace: true });
  };

  return (
    <Container>
    
      <Banner>
        <h1>
          O melhor <br />
          HAMBURGUER <br /> ESTÁ AQUI!
          <span>Esse cardápio está irresistível</span>
        </h1>
      </Banner>
      <CategoryMenu>
        <CategoryTitle> CARDÁPIOS</CategoryTitle>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            isActive={activeCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </CategoryButton>
        ))}
        {/* Adicione o botão "Em Oferta" aqui, fora do loop de categorias */}
        <CategoryButton
          isActive={isOfferFilterActive}
          onClick={handleToggleOfferFilter}
        >
        </CategoryButton>
      </CategoryMenu>
      
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
      </Container>
  );
}
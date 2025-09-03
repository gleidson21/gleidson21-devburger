// src/components/CardProduct/index.jsx

import propTypes from "prop-types";
import { ContainerCard, InfoContainer, SpacingContainer } from "./styles";
import { CardButton } from "../CardButton";
import { useCart } from "../../hooks/CartContext.jsx";

export function CardProduct({ product }) {
  const { addProduct } = useCart();
  
  const handleAddProduct = () => {
    // Cria um objeto de produto com as propriedades corretas para o carrinho
    const productToAdd = {
      ...product,
      // O preço deve ser um NÚMERO, não uma string formatada
      price: parseFloat(product.currencyValue.replace("R$", "").replace(",", ".")),
    };
    addProduct(productToAdd);
  };

  return (
    <ContainerCard>
      {/* Usa a propriedade 'url' para a imagem */}
      <img src={product.url} alt={product.name} />
      <InfoContainer>
        <h3>{product.name}</h3>
        {/* Exibe a propriedade 'currencyValue' que já está formatada */}
        <p className="price">{product.currencyValue}</p>
      </InfoContainer>
      <SpacingContainer>
        {/* CORREÇÃO: Use o CardButton diretamente e passe a função de clique */}
        <CardButton onClick={handleAddProduct} />
      </SpacingContainer>
    </ContainerCard>
  );
}

CardProduct.propTypes = {
  product: propTypes.object,
};
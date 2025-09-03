/* eslint-disable no-unused-vars */

import React from 'react';
import { Button } from "../Button";

import { useRef, useState } from 'react';
import { Container, TopContainer, Title, ItemContainer, TotalContainer } from "./styles";
import { useCart } from "../../hooks/CartContext";
import { FormaPrice } from "../../utils/FormatPrice";
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function CartResume() {
  const navigate = useNavigate();
  const { cartProducts,clearCart } = useCart();

  const total = cartProducts.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  const deliveryTax = 5;
  const finalPrice = total + deliveryTax;

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity,price:product.price };
    });
    try{
   const {data} = await api.post('/create-payment-intent', { products},
     {
          pending: "Processando seu pedido...",
          success: "Pedido realizado com sucesso!",
          error: "Falha ao realizar o seu pedido.",
        }
   )
   
 navigate('/checkout',{
  state: data,
 })
    }catch(err){
      toast.error('erro tente novamente', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
    }
   
   
 };

  return (
    <div>
      <Container>
        <TopContainer>
          <Title>Resumo do Pedido</Title>
        </TopContainer>
        <ItemContainer>
          <p>Itens</p>
          <p>{FormaPrice(total * 100)}</p>
        </ItemContainer>
        <ItemContainer>
          <p>Taxa de entrega</p>
          <p>{FormaPrice(deliveryTax * 100)}</p>
        </ItemContainer>
        <TotalContainer>
          <p>Total</p>
          <p>{FormaPrice(finalPrice * 100)}</p>
        </TotalContainer>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
  }
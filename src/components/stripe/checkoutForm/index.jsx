import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import './styles.css'
import { toast } from "react-toastify";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export function CheckoutForm() {
  const { cartProducts,clearCart } = useCart();
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

    setIsLoading(true);

    // Confirma o pagamento e obtém o resultado
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
console.log(paymentIntent)
    // Se houve um erro no pagamento
    console.log(error)
    if (error) {
      if (error) {
        setMessage(error.message);
                toast.error(error.message);
      } else {
        setMessage("Ocorreu um erro inesperado.");
      }
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Se o pagamento foi bem-sucedido
        setMessage("Pagamento bem-sucedido! 🎉");
try {
  const products = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity,price:product.price };
    });
      // Usando toast.promise para gerenciar os estados de sucesso, erro e carregamento
      const response = await toast.promise(
        api.post("/orders", { products }),
      {
      pending: "Processando seu pedido...",
      success: "Pedido realizado com sucesso!",
      error: "Falha ao realizar o seu pedido.",
    }
      );

      if (response.status === 200 || response.status === 201) {
     
        setTimeout(() => {
          navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }, 2000);
          clearCart();
      } else {

        toast.error(response.data?.message || "Ocorreu um erro ao finalizar o pedido.");
      }

    } catch (error) {
      if (error.response && error.response.data?.message) {
        toast.error(error.response.data.message);
      } else {
             navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
      }
}
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  };

  return (
    <div className="container">
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
        </span>
      </button>
      {/* Exibe qualquer mensagem de erro ou sucesso */}
      {message && <div id="payment-message">{message}</div>}
    </form>
      </div>
  );

}
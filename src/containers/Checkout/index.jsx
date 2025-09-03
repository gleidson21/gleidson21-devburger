import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import { CheckoutForm } from "../../components";
import stripePromise from "../../config/stripeConfig.js"

export function Checkout (){
    const { state } = useLocation();
    
    // Verifique se o clientSecret existe antes de usá-lo
    if (!state || !state.clientSecret) {
        // Se não houver clientSecret, o componente não pode renderizar
        return <div>Erro: clientSecret não encontrado.</div>
    }

    const { clientSecret } = state;

 

    // O objeto de opções do Stripe
    const options = {
        clientSecret: clientSecret,
        // Você pode adicionar outras opções aqui, como o tema
        // appearance: { theme: 'stripe' },
    };

    return(
        <Elements stripe={stripePromise} options={options}>
            {/* O restante do seu formulário de pagamento (por exemplo, CardElement)
            deve ser renderizado aqui dentro de <Elements> */}
            < CheckoutForm />
        </Elements>
    )
}
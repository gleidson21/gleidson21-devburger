import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Menu,
  Register,
  Login,
  Cart,
  Checkout,
  CompletePayment,
  Orders,

} from "../containers";
import { Userlayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

// Este componente define toda a estrutura de rotas da sua aplicação.
export function AppRouter() {
  return (
    // O <BrowserRouter> habilita o roteamento.
    <BrowserRouter>
      {/* Um único contêiner para todas as rotas. */}
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

         <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin/pedidos" element={<Orders />} />
      
        </Route>

        <Route path="/" element={<Userlayout />}>
          <Route index element={<Home />} />
          <Route path="cardapio" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="complete" element={<CompletePayment />} />
        </Route>

       
        <Route path="/admin" element={<AdminLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

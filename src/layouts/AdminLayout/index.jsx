import { Outlet, Navigate } from "react-router-dom";
import { SideBar } from "../../components";
import { Container  } from "./styles";

export function AdminLayout() {
  let isAdmin = false;

  try {
    // 1. Obtém o item do localStorage usando a chave correta.
    const userDataJSON = localStorage.getItem('@codeburger:user');
    
    // 2. Se houver dados, tenta convertê-los para um objeto JavaScript.
    if (userDataJSON) {
      const parsedData = JSON.parse(userDataJSON);

      // 3. Verifica se a propriedade 'admin' existe e é true.
      // O operador opcional '?' garante que não dará erro caso 'parsedData' seja nulo.
      if (parsedData?.admin === true) {
        isAdmin = true;
      }
    }
  } catch (error) {
    // Se ocorrer um erro (ex: dado corrompido), imprime no console
    // e isAdmin permanece false.
    console.error("Erro ao ler dados do localStorage:", error);
  }

  // 4. Se isAdmin for true, renderiza a rota filha.
  // Caso contrário, redireciona o usuário para a página de login.
  return   isAdmin ?
  
  (
  

  <Container> 
   <SideBar/>
  <main>
  
    <section>
  
   <Outlet />
   
    </section>
  </main>

   
   </Container>
) : (<Navigate to="/login" />
);
}
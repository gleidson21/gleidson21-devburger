import { UserProvider } from "./context/UserContext";
import { ProductsProvider } from "./context/ProductsContext";

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </UserProvider>
  );
};

export default AppProvider;
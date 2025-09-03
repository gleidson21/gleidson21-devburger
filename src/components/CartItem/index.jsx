import React from 'react';
import { useCart } from '../../hooks/CartContext';
import { FormaPrice } from '../../utils/FormatPrice';
import {  
  TableQuantityButton, 
  ProductImage, 
  TrasImage 
} from './styles';
import { Table } from '../Table';
import TrashIcon from '../../assets/trash.svg';

export function CartItem() {
  const { cartProducts, removeProduct, addProduct, updateProductQuantity } = useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td data-label="Produto">
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td data-label="Itens">{product.name}</Table.Td>
              <Table.Td data-label="Preço">{FormaPrice(product.price * 100)}</Table.Td>
              <Table.Td data-label="Quantidade">
                <TableQuantityButton onClick={() => updateProductQuantity(product.id, product.quantity - 1)}>
                  -
                </TableQuantityButton>
                {product.quantity}
                <TableQuantityButton onClick={() => addProduct(product)}>
                  +
                </TableQuantityButton>
              </Table.Td>
              <Table.Td data-label="Total">
                {FormaPrice(product.price * product.quantity * 100)}
              </Table.Td>
              <Table.Td data-label="Remover">
                <TrasImage src={TrashIcon}
                  
                  onClick={() => removeProduct(product.id)}
                >
                  
                </TrasImage>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan="6" style={{ textAlign: 'center' }}>
              Nenhum item adicionado ao carrinho
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
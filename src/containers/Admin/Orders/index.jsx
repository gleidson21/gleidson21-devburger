import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
// Remova esta importação, pois está causando conflito de nomes
// import { data } from 'react-router-dom';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [tableRows, setTableRows] = useState([]); // Renomeado 'row' para 'tableRows' para maior clareza
const [shouldReload] = useState(false);
  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('/orders');
        setOrders(data);
        console.log(data);
      } catch (err) {
        console.error(err); // Corrigido para logar o objeto de erro
      }
    }
    loadOrders();
  }, [shouldReload]);

  useEffect(() => {
    // Verifica se orders é um array antes de mapear
    if (orders && Array.isArray(orders)) {
      const newRows = orders.map(order => createData(order));
      setTableRows(newRows);
    }
  }, [orders]);

  function createData(order) {
    return {
      name: order.userName,
      orderId: order._id,
      date: new Date(order.createdAt).toLocaleDateString('pt-BR'),
      status: order.status,
      products: order.products,
    };
  }
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>pedidos</TableCell>
            <TableCell>Cliente</TableCell> {/* Corrigido de "Client" para "Cliente" */}
            <TableCell>Data do pedido</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Agora, mapeie sobre o estado 'tableRows' que contém os dados da API */}
          {tableRows.map((row) => (
            // A chave deve ser única; row.orderId é mais seguro
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
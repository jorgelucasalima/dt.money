import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function Transacoes() {


  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, [])


  return (
    <Container>
      <div>
        <table>

          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
                <td></td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Container>
  )
}
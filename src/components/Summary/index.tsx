import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import { Container } from "./styles";
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';



export function Summary() {

  const {transactions} = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <Container> 
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$ 1800,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong> - R$ 3800,00</strong>
      </div>
      <div className="destaque-fundo">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$ 6800,00</strong>
      </div>
    </Container>
  )
}
import { Container } from "./styles";


export function Transacoes() {
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
            <tr>
              <td>Desenvolvimento de Site</td>
              <td className="deposito">R$ 12.000</td>
              <td>Desenvolvimento</td>
              <td>12/08/1994</td>
            </tr>
            <tr>
              <td>Luz do gato</td>
              <td className="retirada">R$ - 1.000</td>
              <td>Casa</td>
              <td>13/08/2000</td>
            </tr>
          </tbody>

        </table>
      </div>
    </Container>
  )
}
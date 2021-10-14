import { Container } from "./styles"
import { Summary } from "../Summary"
import { Transacoes } from "../Transacoes"

export function Dashboard () {
  return(
    <Container>
      <Summary />
      <Transacoes/>
    </Container> 

  )

}
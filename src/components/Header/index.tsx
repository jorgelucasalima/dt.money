import Modal from 'react-modal'
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNovaTransacaoModal: () => void
}


export function Header({onOpenNovaTransacaoModal}:HeaderProps) {


  return(
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNovaTransacaoModal}>Nova Transação</button>

        
      </Content>
    </Container>
  )
}
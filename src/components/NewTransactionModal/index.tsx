import {useState, FormEvent} from 'react'
import Modal from 'react-modal';
import close from '../../assets/close.svg'
import {Container,TransactionTypeContainer, RadioBox} from './styles'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { api } from '../../services/api';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const [type, setType] = useState('deposito')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()
    
    const data = {
      title,
      value,
      category,
      type,
    } 

    api.post('/transactions', data)

  }


  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" 
              onClick={onRequestClose} 
              className="react-modal-close">
        <img src={close} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text"   
          placeholder="Titulo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={income} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}  
        />
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )

}
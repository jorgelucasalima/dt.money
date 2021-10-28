import Modal from 'react-modal'
import { useState } from 'react';
import {Header} from './components/Header'
import {Dashboard} from './components/Dashboard'
import {EstiloGlobal} from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root')

export function App() {

  const [modalTransacaoAberto, setModalTransacaoAberto] = useState(false)

  function handleAbertoNovaTransacaoModal() {
    setModalTransacaoAberto(true)
  }

  function handleFechadoNovaTransacaoModal() {
    setModalTransacaoAberto(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNovaTransacaoModal={handleAbertoNovaTransacaoModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={modalTransacaoAberto}
        onRequestClose={handleFechadoNovaTransacaoModal}
      />


      <EstiloGlobal />
    </TransactionsProvider>
  );
}



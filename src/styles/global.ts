import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  
  :root {
    --cordefundo: #F0F2F5
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-seze 16px padrão de font ideal para desktop

  html {
    //parei aqui
  }

  body {
    background: var(--cordefundo);
    -webkit-font-smoothing: antialiased;
  }



`
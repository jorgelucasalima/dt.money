import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  
  :root {
    --cordefundo: #F0F2F5;
    --vermelho: #e52e4d;
    --azul: #5429cc;

    --azul-claro: #6933ff;
    
    --verde: #33CC95;

    --texto-title: #363f5f;
    --texto-body: #969cb3;

    --fundo: #F0F2F5;
    --shape: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-seze 16px padrão de font ideal para desktop

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }


  body {
    background: var(--cordefundo);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }

`
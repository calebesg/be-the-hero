import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased; 
  }

  input, button, textarea {
    font: 400 18px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;  
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    resize: vertical;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;  
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 100%;
    height: 60px;
    background-color: #e02041;
    border: 0;
    border-radius: 8px;
    color: #f0f0f5;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(90%);
    }
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.3s;

    svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`

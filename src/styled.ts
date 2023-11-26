import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eeeeee',
  black: '#111111',
  gray: '#333333',
  green: '#10ac84'
}

export const Globalcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    justify-content: space-between;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`

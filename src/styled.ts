import { createGlobalStyle } from 'styled-components'

const Colors = {
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
  }

  body {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`

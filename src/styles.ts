import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eeeeee',
  black: '#111111',
  gray: '#333333',
  grayFooter: '#a3a3a3',
  green: '#10ac84'
}

export const breakpoints = {
  descktop: '1024px',
  tablet: '768px'
}

export const Globalcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
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

    @media (max-width: ${breakpoints.descktop}) {
      max-width: 80%;
    }
  }
`

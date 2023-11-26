import styled from 'styled-components'

import { Colors } from '../../styled'

export const HeaderBar = styled.header`
  display: flex;
  background-color: ${Colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  align-items: center;

  a {
    color: ${Colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const Cart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

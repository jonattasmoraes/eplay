import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styled'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.backgrond === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.backgrond === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

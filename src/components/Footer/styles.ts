import styled from 'styled-components'

import { colors } from '../../styled'

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const LinkItem = styled.a`
  color: ${colors.grayFooter};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

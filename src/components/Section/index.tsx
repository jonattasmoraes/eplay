import { Container, Title } from './styles'

export type Props = {
  title: string
  backgrond?: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ title, backgrond, children }: Props) => (
  <Container backgrond={backgrond}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section

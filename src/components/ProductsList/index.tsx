import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  backgrond: 'gray' | 'black'
}

const ProductsList = ({ backgrond, title }: Props) => (
  <Container backgrond={backgrond}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="Descrição"
          image="//via.placeholder.com/244x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Game"
        />
        <Product
          category="Ação"
          description="Descrição"
          image="//via.placeholder.com/244x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Game"
        />
        <Product
          category="Ação"
          description="Descrição"
          image="//via.placeholder.com/244x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Game"
        />
        <Product
          category="Ação"
          description="Descrição"
          image="//via.placeholder.com/244x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Game"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList

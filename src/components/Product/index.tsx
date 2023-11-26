import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//via.placeholder.com/222x250" />
    <Title>Nome game</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sunt
      perferendis excepturi voluptas quae assumenda similique, perspiciatis ut
      beatae facilis eum quam quaerat! Porro mollitia numquam commodi. Eveniet,
      ipsum quaerat?
    </Description>
  </Card>
)

export default Product

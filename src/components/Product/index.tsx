import Tag from '../Tag'
import { Card, Description, Infos, Title } from './styles'

type Props = {
  id: number
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }

    return description
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product

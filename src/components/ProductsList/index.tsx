import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.releaseDate) {
      tags.push(game.releaseDate)
    }

    if (game.price && game.price.discount) {
      tags.push(`${game.price.discount}%`)
      tags.push(formatPrice(game.price.current))
    }

    if (game.price && game.price.current) {
      tags.push(formatPrice(game.price.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loaders'

import { formatPrice } from '../../utils'
import { useGetFeatureGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do Dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner

import { Game } from '../../pages/Home'
import { ButtonContainer } from '../Button/styles'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span> de {formatPrice(game.prices.old)}</span>
          )}
          {game.prices.current && (
            <>por apenas {formatPrice(game.prices.current)}</>
          )}
        </p>
        {game.prices.current && (
          <ButtonContainer
            variant="primary"
            type="button"
            title="Clique aqui para adicionar ao carrinho"
          >
            Adicionar ao carrinho
          </ButtonContainer>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero

import { Image, Prices, Title } from './styles'
import bannerImage from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { formatPrice } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game | undefined>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3> // Melhorar a mensagem de loading
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="large">Destaque do Dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{game.price && formatPrice(game.price.old)}</span> <br />
            por apenas {game.price && formatPrice(game.price.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner

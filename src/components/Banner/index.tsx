import { Image, Prices, Title } from './styles'

import bannerImage from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <Tag size="large">Destaque do Dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS$ & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
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

export default Banner

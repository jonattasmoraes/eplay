import { Image, Prices, Title } from './styles'

import bannerImage from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS$ & PS5</Title>
      <Prices>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Prices>
    </div>
  </Image>
)

export default Banner

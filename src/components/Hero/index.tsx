import bannerImg from '../../assets/images/fundo_hogwarts.png'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00 </span>
          por R$ 199,90
        </p>
        <ButtonContainer
          variant="primary"
          type="button"
          title="Clique aqui para adicionar ao carrinho"
        >
          Adicionar ao carrinho
        </ButtonContainer>
      </Infos>
    </div>
  </Banner>
)

export default Hero

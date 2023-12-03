import Section from '../../components/Section'
import ZeldaImg from '../../assets/images/zelda.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" backgrond="black">
    <Items>
      <Item>
        <img src={ZeldaImg} alt="Zelda" />
      </Item>
      <Item>
        <img src={ZeldaImg} alt="Zelda" />
      </Item>
      <Item>
        <img src={ZeldaImg} alt="Zelda" />
      </Item>
      <Item>
        <img src={ZeldaImg} alt="Zelda" />
      </Item>
    </Items>
  </Section>
)

export default Gallery

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const offers: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    image: resident,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    image: resident,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 1,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    image: resident,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 1,
    title: 'Resident Evil 4',
    system: 'Windows',
    category: 'Ação',
    image: resident,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['10%', 'R$ 250,00']
  }
]

const commingGames: Game[] = [
  {
    id: 5,
    title: 'Diablo IV',
    system: 'Windows',
    category: 'RPG',
    image: diablo,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['17/11']
  },
  {
    id: 6,
    title: 'Diablo IV',
    system: 'Windows',
    category: 'RPG',
    image: starwars,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['17/11']
  },
  {
    id: 7,
    title: 'Diablo IV',
    system: 'Windows',
    category: 'RPG',
    image: zelda,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['17/11']
  },
  {
    id: 8,
    title: 'Diablo IV',
    system: 'Windows',
    category: 'RPG',
    image: resident,
    description:
      'Resident Evil 4, conhecido no japao como Biohazard, é um jogo eletronico de survival horror de 2022',
    infos: ['17/11']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={offers} title="Promoções" backgrond="gray" />
    <ProductsList games={commingGames} title="Em breve" backgrond="black" />
  </>
)

export default Home

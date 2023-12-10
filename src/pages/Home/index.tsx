import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: offers } = useGetOnSaleQuery()
  const { data: comingGames } = useGetSoonQuery()

  if (!offers || !comingGames) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner />
      <ProductsList
        games={offers}
        title="Promoções"
        background="gray"
        id="on-sale"
      />
      <ProductsList
        games={comingGames}
        title="Em breve"
        background="black"
        id={'coming-soon'}
      />
    </>
  )
}

export default Home

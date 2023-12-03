import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate: string
  price: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    language: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [offers, setOffers] = useState<Game[]>([])
  const [comingGames, setComingGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setOffers(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setComingGames(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={offers} title="Promoções" background="gray" />
      <ProductsList games={comingGames} title="Em breve" background="black" />
    </>
  )
}

export default Home

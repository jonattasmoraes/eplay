import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: offers, isLoading: isLoadingOffers } = useGetOnSaleQuery()
  const { data: comingGames, isLoading: isLoadingComing } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={offers}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingOffers}
      />
      <ProductsList
        games={comingGames}
        title="Em breve"
        background="black"
        id={'coming-soon'}
        isLoading={isLoadingComing}
      />
    </>
  )
}

export default Home

import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: RPGGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id={'action'}
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id={'sports'}
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id={'fight'}
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={RPGGames}
        title="RPG"
        background="gray"
        id={'rpg'}
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id={'simulation'}
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={simulationGames}
        title="simulação"
        background="black"
        id={'simulation'}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories

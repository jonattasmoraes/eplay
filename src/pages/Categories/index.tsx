import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: RPGGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    !actionGames ||
    !sportsGames ||
    !fightGames ||
    !RPGGames ||
    !simulationGames
  ) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id={'action'}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id={'sports'}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id={'fight'}
      />
      <ProductsList games={RPGGames} title="RPG" background="gray" id={'rpg'} />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList
        games={simulationGames}
        title="simulação"
        background="black"
        id={'simulation'}
      />
    </>
  )
}

export default Categories

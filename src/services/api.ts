import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Game, void>({
      query: () => '/destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => '/promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => '/em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => '/acao'
    }),
    getRPGGames: builder.query<Game[], void>({
      query: () => '/rpg'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => '/simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => '/luta'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => '/esportes'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `/jogos/${id}`
    })
  })
})

export const {
  useGetFeatureGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetSportsGamesQuery,
  useGetGameQuery
} = api

export default api

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api

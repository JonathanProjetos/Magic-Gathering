import axios from 'axios'
// import { Card } from 'mtgsdk-ts'
import { Card } from '../Interface/Card'
// import { Cards } from "mtgsdk-ts";

const api = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1/cards',
})

export const requestCards = async (): Promise<Card[]> => {
  const { data } = await api.get('/')
  return data.cards as []
}

export const requestCardByID = async (id: string): Promise<Card> => {
  const { data } = await api.get(`/${id}`)
  return data as Card
}

export default api

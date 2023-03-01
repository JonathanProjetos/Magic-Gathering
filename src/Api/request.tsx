import axios from 'axios';
import { Cards } from "mtgsdk-ts";

const api = axios.create({
  baseURL: `https://api.magicthegathering.io/v1/cards`,
});

export const requestCards = async (): Promise<any> => {
    const { data } = await api.get('/');
    return data.cards as unknown as [];
};

export const requestCardByID = async (id:String): Promise<any> => {
  const { data } = await api.get(`/${id}`);
  console.log();
  
  return data as unknown as {};
};


export default api;
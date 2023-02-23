import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.magicthegathering.io/v1/cards`,
});

export const requestCards = async (): Promise<any> => {
    const { data } = await api.get('/');
    return data as unknown as [];
};

export default api;
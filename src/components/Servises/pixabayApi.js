import axios from 'axios';

const API_KEY = '37048834-594b42b2db4c8472c20f59a64';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  },
});

export const getImages = async (query, page) => {
  const { data } = await instance.get(`?q=${query}&page=${page}`);
  return data;
};

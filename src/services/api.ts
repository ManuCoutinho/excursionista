import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.unsplash.com/photos/',
  headers: { Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}` }
});

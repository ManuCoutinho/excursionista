import { useQuery } from 'react-query';
import { api } from '../services/api';
interface DataImage {
  regular: string;
  full: string;
  thumb: string;
  author: string;
}

export async function getImages(img: string): Promise<DataImage> {
  const { data } = await api.get(`${img}`);
  const regular = data.urls.regular;
  const thumb = data.urls.thumb;
  const full = data.urls.full;
  const author = data.user.name;
  return { regular, thumb, full, author };
}

export function useQueryImages(img: string) {
  return useQuery(['unsplash', img], () => getImages(img), {
    staleTime: 60 * 30 // 30 minutes
  });
}

import { useQuery } from 'react-query';
import { api } from '../services/api';

type DataImage = {
  data: {
    data: {
      urls: {
        regular: string;
        full: string;
        thumb: string;
      };
    };
  };
};

type GetImageResponse = {
  data: DataImage[];
};

export async function getImages(img: string): Promise<GetImageResponse> {
  return await api.get(`${img}`);
}

export function useQueryImages(img: string) {
  return useQuery(['unsplash', img], () => getImages(img), {
    staleTime: 60 * 30 // 30 minutes
  });
}

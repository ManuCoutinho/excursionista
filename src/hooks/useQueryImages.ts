import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { queryClient } from '../services/QueryClient';
import { idGenerator } from '../utils/idGenerator';

export function useQueryImages<T = unknown>(img: string) {
  const [data, setData] = useState<T | null>(null);
  const id = idGenerator();
  useEffect(() => {
    try {
      queryClient.fetchQuery(
        [`unsplash-${id}`],
        async () => {
          const response = await api.get(`${img}`);
          return setData(response.data);
        },
        {
          staleTime: 1000 * 60 * 10 // 10 minutos
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [img]);

  return { data };
}

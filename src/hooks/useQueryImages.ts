import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { queryClient } from '../services/QueryClient';

export function useQueryImages<T = unknown>(img: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    queryClient.prefetchQuery(
      ['unsplash', img],
      async () => {
        const response = await api.get(`${img}`);
        return setData(response.data);
      },
      {
        staleTime: 1000 * 60 * 10 // 10 minutos
      }
    );
  }, [img]);

  return { data };
}

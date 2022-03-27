import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../api/api';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        setData(response.data);
        if (response.status === 200) {
          setStatus(true);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return { data, error, isFetching, status };
}

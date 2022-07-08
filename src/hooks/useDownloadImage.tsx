import { useQuery } from 'react-query';
import { api } from '../services/api';
interface DataTrigger {
 url: string
}

  export async function getUrlDownload (link: string): Promise<DataTrigger>{
    const {data} = await api.get(`${link}`)
    const url = data.url
    return {url};
    }


export function useDownloadImage(link: string) {
  return useQuery(['trigger-download', link], () => getUrlDownload(link), {
    staleTime: 60 * 30, // 30 minutes   
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false
  });
}

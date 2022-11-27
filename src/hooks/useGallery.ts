/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'services/api'
import { useEffect, useState } from 'react'
import { DataImages } from 'templates/Gallery/types'

export const useGallery = () => {
  const [data, setData] = useState<DataImages>()
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)
  let isLoading = false

  async function getImages(param: string, page: number) {
    try {
      isLoading = true
      const { data, status } = await api.get(
        `search/photos?page=${page}&query=${param}&order_by=relevant&orientation=landscape`
      )
      if (data !== undefined && status === 200) {
        setData(data)
        isLoading = false
      }
      return data
    } catch (err) {
      console.error('Oops deu ruim!', err)
      isLoading = true
    }
  }
  useEffect(() => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const param = urlParams.get('query')
    setTitle(param || '')
    const term = param?.split(' ') || ''

    getImages(term[0].toLocaleLowerCase(), page)
  }, [page])

  //ver page atual =1 e increment
  //salvar no state ou localStorage
  //criar callback
  //react query
  return { data, isLoading, title }
}

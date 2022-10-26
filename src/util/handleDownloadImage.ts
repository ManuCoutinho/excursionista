import { api } from 'api/api'

export async function getUrlAndDownload(link = '', filename: string) {
  await api
    .get(`${link}`, {
      responseType: 'blob'
    })
    .then((response) => {
      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: response.headers['content-type']
        })
      )

      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${filename}.jpg`)
      document.body.appendChild(link)
      link.click()
      link.remove()
    })
}

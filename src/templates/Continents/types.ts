export type ContinentPageProps = {
  page: {
    id: string
    slug: string
    bio: string
    name: string
    numberCountry: string
    numberTopCity: string
    numberLanguage: string
    cover: {
      width: number
      height: number
      fileName: string
      mimeType: string
    }
    cities: Array<CitiesGallery>
  }
}

export type CitiesGallery = {
  city: string
  flag: string
  image: string
  country: string
}

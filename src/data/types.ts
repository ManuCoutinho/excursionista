import { GalleryItemsProps } from 'components/GalleryItems/types'
export type DataType = {
  continent: string
  image: string
  bio: string
  id: string
  name: string
  numberCountry: string
  numberLanguage: string
  numberTopCity: string
  cities: GalleryItemsProps[]
}
export type ContentDataType = {
  africa: DataType
  asia: DataType
  oceania: DataType
  northAmerica: DataType
  southAmerica: DataType
  europe: DataType
}

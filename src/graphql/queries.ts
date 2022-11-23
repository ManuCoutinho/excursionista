import { gql } from 'graphql-request'

export const GET_PAGE = gql`
  query getPage {
    pages {
      id
      slug
      bio
      name
      numberCountry
      numberTopCity
      numberLanguage
      cover {
        width
        height
        fileName
        mimeType
      }
      cities
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      bio
      name
      numberCountry
      numberTopCity
      numberLanguage
      cover {
        width
        height
        fileName
        mimeType
      }
      cities
    }
  }
`

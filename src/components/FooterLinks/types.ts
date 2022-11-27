export type FooterLinkProps = {
  subtitle: string
  links: MenuLink[]
}

export type MenuLink = {
  name: string
  slug: string
  id?: string
}

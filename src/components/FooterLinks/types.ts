export type FooterLinkProps = {
  subtitle: string
  links: MenuLink[]
}

export type MenuLink = {
  listItem?: string
  url: string
  text?: string
}

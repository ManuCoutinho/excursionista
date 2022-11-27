import dynamic from 'next/dynamic'
import { Fragment, FC } from 'react'
import { Header } from 'components/Header'
import { LayoutProps } from './types'

const Layout: FC<LayoutProps> = ({ children }) => {
  const Footer = dynamic(() => import('components/Footer'))
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}
export default Layout

import dynamic from 'next/dynamic'
import { Fragment, ReactNode, FC } from 'react'
import { Header } from 'components/Header'

interface LayoutProps {
  children: ReactNode
}

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

import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import { Header } from '../Header'

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  const FooterComponent = dynamic(() => import('../Footer'))
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterComponent />
    </>
  )
}

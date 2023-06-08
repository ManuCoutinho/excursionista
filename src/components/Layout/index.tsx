import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from 'components/Header'
import { LayoutProps } from './types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const Footer = dynamic(() => import('components/Footer'))
	return (
		<AnimatePresence>
			<Header />
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				style={{ width: '100dvw' }}>
				{children}
			</motion.main>
			<Footer />
		</AnimatePresence>
	)
}
export default Layout

import {
	Flex,
	useColorModeValue,
	useMediaQuery,
	Box
} from '@chakra-ui/react'
import { Menu } from 'components/Menu'
import { Logo } from 'components/Logo'

export const Header: React.FC = () => {
	const color = useColorModeValue('white', 'purple.900')
	const [isLargerThan800] = useMediaQuery('(max-width: 800px)', {
		ssr: true,
		fallback: false
	})

	return (
		<Flex
			as='header'
			justify='space-between'
			p={4}
			pos='fixed'
			w='100%'
			height='10vh'
			bgColor={color}
			zIndex={100}
			boxShadow='lg'
			gap={!isLargerThan800 ? '38%' : '2rem'}
			align='center'>
			<Box w='5rem' p={1}>
				<Menu />
			</Box>
			<Logo />
		</Flex>
	)
}

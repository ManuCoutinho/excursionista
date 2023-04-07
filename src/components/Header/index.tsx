import { useRouter } from 'next/router'
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { NavButton } from 'components/NavButton'
import { ToggleButton } from 'components/ToggleButton'
import { Menu } from 'components/Menu'
import { Logo } from 'components/Logo'

export const Header: React.FC = () => {
	const color = useColorModeValue('white', 'purple.900')
	const router = useRouter()

	return (
		<Flex
			as='header'
			justify='space-around'
			p={4}
			pos='fixed'
			w='100%'
			bgColor={color}
			zIndex={100}
			boxShadow='lg'>
			<HStack align='center' spacing={[2, 4, 8]}>
				<Menu />
				{router.pathname !== '/' && <NavButton />}
			</HStack>
			<Box>
				<Logo />
			</Box>
			<ToggleButton />
		</Flex>
	)
}

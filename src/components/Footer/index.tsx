import {
	Box,
	Divider,
	Flex,
	useBreakpointValue,
	useMediaQuery
} from '@chakra-ui/react'
import { Logo } from 'components/Logo'
import { Contacts } from 'components/Contacts'
import { FooterLinks } from 'components/FooterLinks'
import { socialLinks } from 'constants/socialLinks'
import { useMenu } from 'hooks/useMenu'
import { FooterLinkProps } from 'components/FooterLinks/types'

const Footer: React.FC = () => {
	const { data } = useMenu()
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
	const showContacts = useBreakpointValue({
		base: false,
		lg: true
	})

	const socialItems = {
		subtitle: 'Redes Sociais',
		links: socialLinks
	} as FooterLinkProps

	const menuItems = {
		subtitle: 'Menu',
		links: data
	} as FooterLinkProps

	return (
		<Flex
			as='footer'
			justify='center'
			w='100%'
			py={[6, 8, 12, 16]}
			color='gray.900'>
			{isLargerThan1024 && (
				<Box>
					<Logo />
				</Box>
			)}
			<Box>
				<Divider mb={4} role='separator' />
				<Flex gap={[6, 8, 10]} direction='row'>
					<Box>
						<FooterLinks {...menuItems} />
					</Box>
					<Box alignSelf='flex-start'>
						<FooterLinks {...socialItems} />
					</Box>
					{showContacts && <Contacts />}
				</Flex>
				{!showContacts && <Contacts />}
			</Box>
		</Flex>
	)
}
export default Footer

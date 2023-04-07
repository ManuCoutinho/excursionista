import {
	Heading,
	List,
	ListItem,
	Link as ChakraLink,
	useColorMode
} from '@chakra-ui/react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { FooterLinkProps } from './types'

export const FooterLinks: React.FC<FooterLinkProps> = ({
	links,
	subtitle
}) => {
	const { colorMode } = useColorMode()
	const listColor = colorMode === 'light' ? 'gray.600' : 'whiteAlpha.700'
	return (
		<nav>
			<Heading fontSize='lg' fontWeight='semibold' color='red.600' mb={4}>
				{subtitle}
			</Heading>
			<List fontSize={['xs', 'sm']} color={listColor}>
				{links?.map(({ name, slug }) => (
					<Link
						key={uuidv4()}
						passHref
						legacyBehavior
						href={
							subtitle === 'Redes Sociais' ? slug : `/continent/${slug}`
						}>
						<ListItem
							aria-label={name}
							role='listitem'
							p={1}
							_hover={{
								color: 'purple.300'
							}}>
							<ChakraLink
								rel={
									subtitle === 'Redes Sociais' ? 'noreferrer noopener' : ''
								}
								isExternal={subtitle === 'Redes Sociais' ? true : false}>
								{name}
							</ChakraLink>
						</ListItem>
					</Link>
				))}
			</List>
		</nav>
	)
}

import { Heading, List, ListItem, useColorMode } from '@chakra-ui/react'
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
				{links.length > 1
					? links?.map(({ name, slug }) => (
							<Link
								key={uuidv4()}
								passHref
								href={
									subtitle === 'Redes Sociais'
										? slug
										: `/continent/${slug}`
								}
								rel={
									subtitle === 'Redes Sociais' ? 'noreferrer noopener' : ''
								}>
								<ListItem
									aria-label={name}
									role='listitem'
									p={2}
									transition='ease-in-out'
									transitionDelay='0.25ms'
									_hover={{
										color: 'purple.300',
										textDecoration: 'underline',
										textDecorationThickness: '2px',
										textUnderlineOffset: '3px'
									}}>
									{name}
								</ListItem>
							</Link>
					  ))
					: null}
			</List>
		</nav>
	)
}

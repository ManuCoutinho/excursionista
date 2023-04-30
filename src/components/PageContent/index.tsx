import { Box, Grid, Text, useColorMode } from '@chakra-ui/react'
import { BoxInfo } from '../BoxInfo'
import { PageContentProps } from './types'

const PageContent: React.FC<PageContentProps> = ({
	city,
	country,
	language,
	text
}) => {
	const { colorMode } = useColorMode()
	const textColor = colorMode === 'light' ? 'gray.600' : 'whiteAlpha.700'
	return (
		<Grid
			templateColumns='repeat(auto-fit, minmax(250px, 1fr))'
			gap={[4, 6, 8, 12]}
			my={16}
			px={[2, 4, 6, 14]}
			mx='auto'>
			<Box>
				<Text
					fontSize={['sm', 'md', 'lg', 'xl']}
					lineHeight='tall'
					color={textColor}>
					{text}
				</Text>
			</Box>
			<BoxInfo country={country} language={language} city={city} />
		</Grid>
	)
}
export default PageContent

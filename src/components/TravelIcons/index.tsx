import {
	Box,
	Flex,
	IconButton,
	useMediaQuery,
	Wrap,
	Text
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'
import { travelIcons } from 'constants/travelIcons'
import { IconContext } from 'react-icons'

export const TravelIcons: React.FC = () => {
	const [isMobile] = useMediaQuery('(min-width: 800px)')
	const iconSize = isMobile ? '2.5em' : '1.25em'

	return (
		<Box>
			<Wrap
				spacing={[4, 6, 10, 16, 20]}
				mx='auto'
				justify='center'
				mt={[8, 12, 16, 20, 28]}
				mb={[8, 12, 16, 20]}>
				<IconContext.Provider
					value={{ style: { verticalAlign: 'middle' }, size: iconSize }}>
					{travelIcons?.map(({ Icon, description }) => (
						<Flex
							key={uuidv4()}
							as='li'
							w={[40, 55, 80, 100, 150]}
							alignItems='center'
							direction='column'
							justify='center'>
							<IconButton
								aria-label={description}
								icon={<Icon />}
								bgColor='transparent'
								color='red.600'
								size='lg'
								variant='unstyled'
							/>
							<Text
								w='inherit'
								mt={[2, 4, 6]}
								color='gray.600'
								fontSize={['10px', 'xs,', 'sm', 'md', 'lg', 'xl']}
								fontWeight={['normal', 'medium', 'semibold']}
								textAlign='center'>
								{description}
							</Text>
						</Flex>
					))}
				</IconContext.Provider>
			</Wrap>
		</Box>
	)
}

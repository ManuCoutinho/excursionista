import { Box, HStack, Text, useColorMode } from '@chakra-ui/react'
import { CardInfoProps } from './types'

export const CardInfo: React.FC<CardInfoProps> = ({
	number,
	description,
	children
}) => {
	const { colorMode } = useColorMode()
	const textColor = colorMode === 'light' ? 'gray.600' : 'whiteAlpha.700'

	return (
		<Box>
			<Text
				color='yellow.500'
				fontSize={['lg', 'xl', '3xl', '5xl']}
				fontWeight='bold'>
				{number}
			</Text>
			<HStack>
				<Text color={textColor} fontSize='xl' fontWeight='bold'>
					{description}
				</Text>
				<span>{children}</span>
			</HStack>
		</Box>
	)
}

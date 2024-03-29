import { Box, Text } from '@chakra-ui/react'

export const ActionMessage: React.FC = () => {
	return (
		<Box
			as='button'
			w='100%'
			color='gray.600'
			textAlign='center'
			fontWeight='medium'
			lineHeight='tall'
			fontSize={['xl', '2xl', '3xl']}
			_hover={{
				transform: 'scale(0.98)',
				textDecoration: 'underline',
				color: 'purple.300'
			}}
			mb={[10, 14]}>
			<Text mt='14'>Vamos nessa?</Text>
			<Text>Então escolha seu continente</Text>
		</Box>
	)
}

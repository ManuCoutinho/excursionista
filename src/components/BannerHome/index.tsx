import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Banner: React.FC = () => {
	const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
	return (
		<Flex
			as='section'
			w='100%'
			h='70vh'
			bgImage="url('/assets/banner/bg.jpg')"
			bgPosition='center'
			bgRepeat='no-repeat'
			bgSize='cover'>
			<Flex justify='space-between' align='center' mx='auto'>
				<Box
					w={[300, 500]}
					color='gray.50'
					p='4'
					mr='8'
					as={motion.div}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition='0.5s ease-in'>
					<Heading
						fontWeight={500}
						fontSize={['2xl', '4xl']}
						lineHeight='taller'>
						5 Continentes, infinitas possibilidades.
					</Heading>
					<Text fontSize={['lg', 'xl']} mt='4' lineHeight='tall'>
						Chegou a hora de tirar do papel a viagem que você sempre
						sonhou.
					</Text>
				</Box>
				{isLargerThan1024 && (
					<Flex justify='flex-end' align='baseline' mt={275}>
						<motion.div
							initial={{ opacity: 0, x: 500 }}
							animate={{ opacity: 1, x: 100 }}
							transition={{ type: 'spring', stiffness: 50 }}>
							<Image
								src='/assets/banner/airplane.svg'
								alt='Airplane'
								width={417}
								height={270}
								loading='lazy'
							/>
						</motion.div>
					</Flex>
				)}
			</Flex>
		</Flex>
	)
}

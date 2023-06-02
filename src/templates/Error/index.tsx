import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { VStack, Text, Button, Flex } from '@chakra-ui/react'

const ErrorTemplate: React.FC<{ statusCode: number | null }> = ({
	statusCode
}) => {
	const router = useRouter()
	const ErrorImage = '/assets/error.svg'
	return (
		<Fragment>
			<NextSeo title='Excursionista | Error' />
			<VStack
				p={[8, 12]}
				align='center'
				justify='center'
				w={['container.md', '100vw']}
				h={['100vh', 'auto']}>
				<Flex w={[600, 800]} justify='center' align='center' mx='auto'>
					<Image
						src={ErrorImage}
						alt='error image'
						quality={75}
						width='600'
						height='400'
						loading='lazy'
					/>
				</Flex>
				<VStack spacing={4} align='center' justify='center' px={2}>
					{statusCode && (
						<Text
							align='center'
							fontWeight='semibold'
							fontSize='xl'>{`Error ${statusCode}`}</Text>
					)}
					<Text fontWeight='semibold' fontSize='lg' align='center'>
						Oops! Something unexpected has occurred!
					</Text>
					<Text align='center'>
						{` We're sorry for the inconvenience, but it looks like the page you're
            trying to access is down for maintenance or not exists.`}
					</Text>
					<Text align='center'>
						Our team is already working to normalize access.
					</Text>
					<Text align='center'>Thanks for the patience!</Text>
					<Button
						type='button'
						onClick={() => router.push('/')}
						variant='outline'
						rounded='3xl'
						size='md'
						px={6}
						colorScheme='orange'>
						Home
					</Button>
				</VStack>
			</VStack>
		</Fragment>
	)
}
export default ErrorTemplate

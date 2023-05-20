import {
	Box,
	Heading,
	Flex,
	Grid,
	VStack,
	Link as ChakraLink,
	IconButton,
	Tooltip,
	HStack,
	Text
} from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs'
import { Skeleton } from 'components/Skeleton'
import { getUrlAndDownload } from 'functions/handleDownloadImage'
import { useGallery } from 'hooks/useGallery'
import { tooltipStyles } from 'styles/components/tooltip'
import { Pagination } from 'components/Pagination'
import { NextSeo } from 'next-seo'
import { GalleryImage } from 'components/GalleryImage'
import { useEffect, useState } from 'react'
import { DataImages } from './types'

const GalleryTemplate: React.FC = () => {
	const { state, isLoading, isFetching } = useGallery()
	const [images, setImages] = useState<DataImages | undefined>(
		state?.images
	)

	useEffect(() => {
		setImages(state?.images)
		if (isFetching) {
			setImages(state?.images)
		}
	}, [state, isFetching])

	console.log('🎯 gallery', images)

	return (
		<Flex h='full' w='full' pt={12} gap={6} direction='column'>
			<NextSeo
				title={`Excursionista | ${state.title}`}
				description={`Viaje para seu destino dos sonhos ${state.title}`}
				canonical={process.env.NEXT_PUBLIC_CANONICAL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_CANONICAL,
					title: 'Excursionista',
					description: `Conheça mais sobre ${state.title}`,
					images: [
						{
							url: process.env.NEXT_PUBLIC_PREVIEW || '',
							width: 1280,
							height: 720,
							alt: process.env.NEXT_PUBLIC_ALT
						}
					]
				}}
			/>
			<Heading
				color='gray.700'
				fontWeight='semibold'
				fontSize='4xl'
				lineHeight='taller'
				my={6}
				pt={12}
				px={24}>
				{`Imagens de ${state.title}`}
			</Heading>
			<Box as='section' w='full' py={6} px={[4, 6, 12, 20]} mx='auto'>
				<Grid
					mb={8}
					templateColumns='repeat(auto-fit, minmax(280px, 1fr))'
					gap={[6, 8, 12]}>
					{images?.results?.map(
						({ alt_description, id, links, urls, user }) => (
							<VStack
								key={id}
								border='1px'
								borderColor='orange.100'
								borderRadius='lg'
								boxShadow='md'
								cursor='pointer'
								bgColor='alphaWhite.300'
								transition='all 0.3s ease-in-out'
								p={1}
								_hover={{
									transform: 'scale(0.98)',
									transition: 'all 0.3s ease-in-out'
								}}>
								{isLoading ? (
									<Skeleton isLoaded={isLoading} />
								) : (
									<Box>
										<Box w='auto'>
											<GalleryImage
												src={urls?.regular}
												alt={alt_description}
											/>
										</Box>
										<HStack p='2' justifyContent='space-between'>
											<Text
												fontSize='x-small'
												color='gray.600'
												mt='2'
												textAlign='left'>
												Photo by
												<ChakraLink
													href={`${links?.html}?utm_source=excursionista&utm_medium=referral`}
													isExternal>
													{user?.name}
												</ChakraLink>
												on
												<ChakraLink
													href='https://unsplash.com/?utm_source=excursionista&utm_medium=referral'
													isExternal>
													Unsplash
												</ChakraLink>
											</Text>
											<Tooltip
												label='Download'
												aria-label='download image'
												{...tooltipStyles}>
												<IconButton
													aria-label='download image'
													colorScheme='orange'
													variant='ghost'
													rounded='full'
													icon={<BsDownload />}
													onClick={() =>
														getUrlAndDownload(urls?.full, alt_description)
													}
												/>
											</Tooltip>
										</HStack>
									</Box>
								)}
							</VStack>
						)
					)}
				</Grid>
				<Pagination />
			</Box>
		</Flex>
	)
}

export default GalleryTemplate

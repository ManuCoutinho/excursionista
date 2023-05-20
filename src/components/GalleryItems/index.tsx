import { useState, useMemo, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
	Box,
	HStack,
	Text,
	VStack,
	Link as ChakraLink,
	IconButton,
	Tooltip,
	useColorMode
} from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs'
import { Skeleton } from 'components/Skeleton'
import { useQueryImages } from 'hooks/useQueryImages'
import { getUrlAndDownload } from 'functions/handleDownloadImage'
import { GalleryItemsProps } from './types'
import { handleRemoveAccent } from 'functions/handleRemoveAccent'
import { tooltipStyles } from 'styles/components/tooltip'
import { GalleryImage } from 'components/GalleryImage'

export const GalleryItems: React.FC<GalleryItemsProps> = ({
	image,
	city,
	country,
	flag
}) => {
	const { colorMode } = useColorMode()
	const [fileName, setFileName] = useState<string>('')
	const [tripUrl, setTripUrl] = useState<string>('')
	const { data, isSuccess } = useQueryImages(image)
	const textColor = colorMode === 'light' ? 'gray.600' : 'whiteAlpha.700'

	useMemo(() => {
		if (data && !isSuccess) {
			const title = data?.alt
			title != null ? setFileName(title) : setFileName(city)
		}
		setTripUrl(
			`${handleRemoveAccent(city.toLocaleLowerCase()).replaceAll(
				' ',
				'-'
			)}-${flag}`
		)
	}, [data, isSuccess, city, flag])

	return (
		<Suspense fallback={<Skeleton isLoaded={!isSuccess} />}>
			<VStack
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
				<>
					<Box>
						<Link
							href={`https://trips.manucoutinho.com/place/${tripUrl}`}
							rel='noopener noreferrer'
							passHref>
							<GalleryImage src={data?.regular || ''} alt={city} />
						</Link>
						<HStack p='2' justifyContent='space-between'>
							<Text
								fontSize='x-small'
								color={textColor}
								mt='2'
								textAlign='left'>
								Photo by
								<ChakraLink
									href={`${data?.userLink}?utm_source=excursionista&utm_medium=referral`}
									isExternal>
									{data?.author}
								</ChakraLink>{' '}
								on{' '}
								<ChakraLink
									href='https://unsplash.com/?utm_source=excursionista&utm_medium=referral'
									isExternal>
									Unsplash
								</ChakraLink>
							</Text>
							<Tooltip
								label='Download'
								aria-label='info'
								placement='bottom'
								{...tooltipStyles}>
								<IconButton
									aria-label='download image'
									colorScheme='orange'
									variant='ghost'
									rounded='full'
									onClick={() => getUrlAndDownload(data?.full, fileName)}>
									<BsDownload />
								</IconButton>
							</Tooltip>
						</HStack>
					</Box>
					<Box
						display='flex'
						px={4}
						py={6}
						justifyContent='space-between'
						width='full'>
						<Box>
							<Text
								color='purple.300'
								fontWeight='medium'
								fontSize='medium'>
								{city}
							</Text>
							<Text color={textColor} fontSize='xs'>
								{country}
							</Text>
						</Box>
						<Image
							src={`https://flagcdn.com/w640/${flag}.png`}
							loading='lazy'
							width={40}
							alt={country}
							crossOrigin='anonymous'
							height={40}
							style={{
								borderRadius: '100%',
								width: '50px',
								objectFit: 'cover',
								boxShadow:
									'inset 0px 14px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)'
							}}
						/>
					</Box>
				</>
			</VStack>
		</Suspense>
	)
}

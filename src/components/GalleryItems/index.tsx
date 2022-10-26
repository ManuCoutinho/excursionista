import { useState, useMemo } from 'react'
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Skeleton,
  useToast,
  Link as ChakraLink,
  IconButton,
  Tooltip
} from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs'
import { useQueryImages } from 'hooks/useQueryImages'

import { getUrlAndDownload } from 'util/handleDownloadImage'
import { GalleryItemsProps } from './types'

export const GalleryItems: React.FC<GalleryItemsProps> = ({ image, city, country, path, flag }) => {
  const [imageRegular, setImageRegular] = useState<string | undefined>('')
  const [imageFull, setImageFull] = useState<string | undefined>('')
  const [author, setAuthor] = useState<string | undefined>('')
  const [fileName, setFileName] = useState<string>('')
  const [backLink, setBackLink] = useState<string | undefined>('')
  const [urlLocation, setUrlLocation] = useState<string | undefined>('')
  const { data, isError, isLoading } = useQueryImages(image)
  const toast = useToast()

  useMemo(() => {
    if (data && !isError) {
      const imgRegular = data?.regular
      const imgFull = data?.full
      const authorName = data?.author
      const userLink = data?.userLink
      const title = data?.alt
      const urlLocation = data.downloadLocation

      setImageRegular(imgRegular)
      setImageFull(imgFull)
      setAuthor(authorName)
      setBackLink(userLink)
      setFileName(title)
      setUrlLocation(urlLocation)
    }
    if (isError) {
      toast({
        status: 'error',
        title: 'Ocorreu um erro!',
        description: 'Algo não saiu como esperado, tente novamente.',
        duration: 3000,
        isClosable: true,
        variant: 'left-accent'
      })
    }
  }, [data])

  // if (isError) {
  //   return <Skelton state={!isLoading} />
  // }
  return (
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
      <Box>
        {isLoading ? (
          <Skeleton
            padding='6'
            boxShadow='lg'
            h='250px'
            boxSize={[400, 450, 350]}
            bg='blackAlpha.100'
            isLoaded={isLoading}
            fadeDuration={0.8}
          />
        ) : (
          <>
            <Image
              src={imageRegular}
              srcSet={imageFull}
              fallbackSrc='/logo/logo.svg'
              alt={city}
              htmlWidth={450}
              htmlHeight={173}
              objectFit='cover'
              boxSize={[400, 450, 350]}
              maxH='250px'
              borderRadius='md'
            />
            <HStack p='2' justifyContent='space-between'>
              <Text fontSize='x-small' color='gray.600' mt='2' textAlign='left'>
                Photo by{' '}
                <ChakraLink
                  href={`${backLink}?utm_source=excursionista&utm_medium=referral`}
                  isExternal>
                  {author}
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
                bgColor='gray.100'
                color='gray.800'
                fontWeight='normal'>
                <IconButton
                  aria-label='download image'
                  colorScheme='orange'
                  variant='ghost'
                  rounded='full'
                  onClick={() => getUrlAndDownload(imageFull, fileName, urlLocation)}>
                  <BsDownload />
                </IconButton>
              </Tooltip>
            </HStack>
          </>
        )}
      </Box>
      <Box display='flex' px={4} py={6} justifyContent='space-between' width='full'>
        <Box>
          <Text color='purple.300' fontWeight='medium' fontSize='medium'>
            {city}
          </Text>
          <Text color='gray.700' fontSize='xs'>
            {country}
          </Text>
        </Box>
        <Image
          src={`https://flagcdn.com/w640/${flag}.png`}
          srcSet={`https://flagcdn.com/w1280/${flag}.webp,
                  https://flagcdn.com/w2560/${flag}.webp 2x`}
          borderRadius='full'
          boxSize='50px'
          boxShadow='lg'
          loading='lazy'
          htmlWidth={40}
          htmlHeight={40}
          objectFit='fill'
          align='center'
          alt={country}
          crossOrigin='anonymous'
        />
      </Box>
    </VStack>
  )
}

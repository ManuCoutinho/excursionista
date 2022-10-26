import { useState, useMemo, Fragment } from 'react'
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Link as ChakraLink,
  IconButton,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs'
import { Skeleton } from 'components/Skeleton'
import { useQueryImages } from 'hooks/useQueryImages'
import { getUrlAndDownload } from 'util/handleDownloadImage'
import { GalleryItemsProps } from './types'
import { Dialog } from 'components/Dialog'

export const GalleryItems: React.FC<GalleryItemsProps> = ({ image, city, country, flag }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fileName, setFileName] = useState<string>('')
  const { data, isError, isLoading } = useQueryImages(image)
  const loadingState = isLoading || isError ? true : false

  useMemo(() => {
    if (data && !isError) {
      const title = data?.alt
      setFileName(title)
    }
  }, [data, isError])

  return (
    <Fragment>
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
        {loadingState ? (
          <Skeleton isLoaded={loadingState} />
        ) : (
          <Fragment>
            <Box>
              <Box onClick={onOpen} w='auto'>
                <Image
                  src={data?.regular}
                  srcSet={data?.full}
                  ignoreFallback
                  alt={city}
                  htmlWidth={450}
                  htmlHeight={173}
                  objectFit='cover'
                  boxSize={[400, 450, 350]}
                  maxH='250px'
                  borderRadius='md'
                />
              </Box>
              <HStack p='2' justifyContent='space-between'>
                <Text fontSize='x-small' color='gray.600' mt='2' textAlign='left'>
                  Photo by{' '}
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
                  bgColor='whiteAlpha.300'
                  color='gray.800'
                  fontWeight='normal'
                  fontSize='x-small'>
                  <IconButton
                    aria-label='download image'
                    colorScheme='orange'
                    variant='ghost'
                    rounded='full'
                    onClick={() => getUrlAndDownload(data?.full, fileName, data?.downloadLocation)}>
                    <BsDownload />
                  </IconButton>
                </Tooltip>
              </HStack>
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
          </Fragment>
        )}
      </VStack>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        city={city}
        country={country}
        flag={flag}
        imgRegular={data?.regular}
        imgFull={data?.full}
        downloadUrl={data?.downloadLocation}
        backLink={data?.userLink}
        author={data?.author}
        fileName={fileName}
      />
    </Fragment>
  )
}

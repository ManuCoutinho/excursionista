import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
  Image,
  Text,
  Box,
  HStack,
  useColorModeValue,
  IconButton,
  Tooltip
} from '@chakra-ui/react'
import { BsDownload } from 'react-icons/bs'
import { getUrlAndDownload } from 'util/handleDownloadImage'
import { DialogProps } from './types'

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  city,
  country,
  flag,
  imgRegular,
  imgFull,
  fileName,
  author,
  downloadUrl,
  backLink
}) => {
  const color = useColorModeValue('white', 'gray.800')
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInRight' size='full'>
      <ModalOverlay />
      <ModalContent bgColor={color} p={8}>
        <ModalHeader>
          <HStack justifyContent='space-around' mb={6}>
            <Box>
              <Text color='purple.300' fontWeight='semibold' fontSize='lg'>
                {city}
              </Text>
              <Text color='gray.500' fontSize='xs'>
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
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={imgRegular}
            srcSet={imgFull}
            ignoreFallback
            alt={city}
            htmlWidth={450}
            htmlHeight={173}
            objectFit='cover'
            w='full'
            maxH='75vh'
            borderRadius='md'
          />
        </ModalBody>
        <ModalFooter>
          <HStack p='2' justifyContent='space-between'>
            <Text fontSize='x-small' color='gray.600' mt='2' textAlign='left'>
              Photo by{' '}
              <Link href={`${backLink}?utm_source=excursionista&utm_medium=referral`} isExternal>
                {author}
              </Link>{' '}
              on{' '}
              <Link
                href='https://unsplash.com/?utm_source=excursionista&utm_medium=referral'
                isExternal>
                Unsplash
              </Link>
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
                onClick={() => getUrlAndDownload(imgFull, fileName, downloadUrl)}>
                <BsDownload />
              </IconButton>
            </Tooltip>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

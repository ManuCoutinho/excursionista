import { useState, useMemo,FormEvent } from 'react';
import { Box, HStack, Text, VStack, Image, Skeleton, useToast, Link as ChakraLink, IconButton, Tooltip } from '@chakra-ui/react';
import {BsDownload} from "react-icons/bs"
import { useQueryImages } from '../../../hooks/useQueryImages';
import { Error } from '../Error/Error';

import { useDownloadImage } from '../../../hooks/useDownloadImage';
import axios from 'axios';
interface GridItemsProps {
  items: {
    image: string;
    city: string;
    country: string;
    flag: string;
    path: string;
  };
}

export const GridItems = ({ items }: GridItemsProps) => {
  const [imageRegular, setImageRegular] = useState<string | undefined>('');
  const [imageFull, setImageFull] = useState<string | undefined>('');
  const [author, setAuthor] = useState<string | undefined>('');
  const [downloadLink, setDownloadLink] = useState<string>('');
  const [backLink, setBackLink] =  useState<string | undefined>('')
  const { data, isError, isLoading } = useQueryImages(items?.image);
  const {data: download} = useDownloadImage(downloadLink)
 const fileName =  data?.download
  const toast = useToast();

  async function handleDownload(){
    const request = await axios.get(`${download?.url}`)
    console.log('🍓', request.data)
  }
  useMemo(() => {
    if (data && !isError) {
      const imgRegular = data?.regular;
      const imgFull = data?.full;
      const authorName = data?.author;
      const userLink = data?.userLink
      const download = data?.download

      setImageRegular(imgRegular);
      setImageFull(imgFull);
      setAuthor(authorName);
      setBackLink(userLink)
      setDownloadLink(download)
    }   
    if (isError) {
      toast({
        status: 'error',
        title: 'Ocorreu um erro!',
        description: 'Algo não saiu como esperado, tente novamente.',
        duration: 3000,
        isClosable: true,
        variant: 'left-accent'
      });
    }
  }, [data])

///url: "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy"
//https://unsplash.com/photos/p0yAVdnx5cU/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8Ym84alFLVGFFMFl8fHx8fDJ8fDE2NTczMDgyMjE&force=true
  if (isError) {
    return <Error state={!isLoading} />
  }
  return (
   
      <VStack
        border='1px'
        borderColor='orange.100'
        borderRadius='lg'
        boxShadow='md'
        cursor='pointer'
        bgColor='alphaWhite.300'
        transition= 'all 0.3s ease-in-out'
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
                alt={items.city}
                htmlWidth={450}
                htmlHeight={173}
                objectFit='cover'
                boxSize={[400, 450, 350]}
                maxH='250px'
                borderRadius='md'
              />
             <HStack p='2' justifyContent='space-between'>
               <Text fontSize='xs' color='blackAlpha.600' mt='2' textAlign='left'>
                Photo by <ChakraLink href={`${backLink}?utm_source=excursionista&utm_medium=referral`} isExternal>{author}</ChakraLink> on <ChakraLink href="https://unsplash.com/?utm_source=excursionista&utm_medium=referral" isExternal>Unsplash</ChakraLink>
              </Text>
              <Tooltip label='Download'>
              <IconButton 
                  aria-label='download image' 
                  colorScheme='orange' 
                  variant='ghost' 
                  rounded='full'
                  onClick={handleDownload}
                >
                    <BsDownload/>
                </IconButton>
               
              </Tooltip>
             </HStack>
            </>
          )}
        </Box>
        <HStack spacing={[4, 6, 10, 12]} px={4} py={6}>
          <Box>
            <Text color='blackAlpha.800' fontWeight='medium' fontSize='medium'>
              {items.city}
            </Text>
            <Text color='gray.700' fontSize='xs'>
              {items.country}
            </Text>
          </Box>
          <Image
            src={`https://flagcdn.com/w40/${items.flag}.png`}
            srcSet={`https://flagcdn.com/w40/${items.flag}.webp,
                  https://flagcdn.com/w80/${items.flag}.webp 2x`}
            borderRadius='full'
            boxSize='45px'
            boxShadow='lg'
            loading='lazy'
            htmlWidth={40}
            htmlHeight={40}
            fit='unset'
            align='center'
            alt={items.country}
          />
        </HStack>
      </VStack>
  );
};

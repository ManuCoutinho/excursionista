import { Box, HStack, Text, VStack, Image, Skeleton, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useQueryImages } from '../../../hooks/useQueryImages';
import { Error } from '../Error/Error';
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
  const images = items.image;
  const { data, isError, isLoading } = useQueryImages(images);

  const toast = useToast();

  useMemo(() => {
    if (data && !isError) {
      const imgRegular = data.regular;
      const imgFull = data.full;
      const authorName = data.author;

      setImageRegular(imgRegular);
      setImageFull(imgFull);
      setAuthor(authorName);
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
  }, [data]);

  if (isError) {
    return <Error state={!isLoading} />;
  }
  return (
    <Link href={items.path}>
      <VStack
        border='1px'
        borderColor='orange.100'
        borderRadius='lg'
        boxShadow='md'
        cursor='pointer'
        bgColor='alphaWhite.300'
        p={1}
        _hover={{
          transform: 'scale(0.98)'
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
                loading='lazy'
                objectFit='cover'
                boxSize={[400, 450, 350]}
                maxH='250px'
                borderRadius='md'
              />
              <Text fontSize='xs' color='blackAlpha.600' mt='2' px='2' textAlign='right'>
                Photo by {author} on Unsplash
              </Text>
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
    </Link>
  );
};

import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useQueryImages } from '../../../hooks/useQueryImages';
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
  const [imageRegular, setImageRegular] = useState('');
  const [imageFull, setImageFull] = useState('');

  const images = items.image;
  const { data, error } = useQueryImages(images);

  error ? console.log(error) : null;

  useMemo(() => {
    if (data) {
      const imgRegular = data.data.urls.regular;
      const imgFull = data.data.urls.full;

      setImageRegular(imgRegular);
      setImageFull(imgFull);
    } else {
      return;
    }
  }, [data]);

  return (
    <Link href={items.path}>
      <VStack
        border='1px'
        borderColor='orange.100'
        borderRadius='lg'
        boxShadow='md'
        cursor='pointer'
        p={1}
        _hover={{
          transform: 'scale(0.98)'
        }}>
        <Box>
          <Image
            src={imageRegular}
            srcSet={imageFull}
            alt={items.city}
            htmlWidth={350}
            htmlHeight={173}
            loading='lazy'
            objectFit='cover'
            boxSize='300px'
            maxH='250px'
            borderRadius='md'
          />
        </Box>
        <HStack spacing={8} px={4} py={6}>
          <Box>
            <Text color='gray.700' fontWeight='medium' fontSize='medium'>
              {items.city}
            </Text>
            <Text color='gray.400' fontSize='xs'>
              {items.country}
            </Text>
          </Box>
          <Image
            src={`https://flagcdn.com/w80/${items.flag}.png`}
            srcSet={`https://flagcdn.com/w80/${items.flag}.webp,
                    https://flagcdn.com/w160/${items.flag}.webp 2x`}
            borderRadius='full'
            boxSize='45px'
            loading='lazy'
            htmlWidth={40}
            htmlHeight={40}
            fit='fill'
            align='center'
            alt={items.country}
          />
        </HStack>
      </VStack>
    </Link>
  );
};

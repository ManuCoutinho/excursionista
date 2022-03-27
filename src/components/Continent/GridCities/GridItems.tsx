import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
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
  const [imageRegular, setImageRegular] = useState<string>();
  const [imageFull, setImageFull] = useState<string>();

  const images = items.image;
  const { data } = useQueryImages<Array<{}>>(images);

  useMemo(() => {
    if (data !== null) {
      const transformObject = Object.entries(data);
      const filterItem = transformObject[10][1];
      setImageRegular(filterItem.regular);
      setImageFull(filterItem.full);
    }
    return { imageRegular, imageFull };
  }, []);

  return (
    <Link href={items.path}>
      <VStack
        border='1px'
        borderColor='orange.100'
        borderRadius='lg'
        boxShadow='md'
        cursor='pointer'
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
            align='center'
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

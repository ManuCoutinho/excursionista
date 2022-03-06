import { Box, HStack, Text, VStack, Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface GridItemsProps {
  img: string;
  city: string;
  country: string;
  flag: string;
  url: string;
}

export const GridItems = ({ city, country, flag, img, url }: GridItemsProps) => {
  return (
    <Link href={url}>
      <VStack
        border='1px'
        borderColor='orange.100'
        borderRadius='lg'
        boxShadow='base'
        cursor='pointer'
        _hover={{
          transform: 'scale(0.98)'
        }}>
        <Box>
          <Image src={img} alt={city} width={250} height={173} />
        </Box>
        <HStack spacing={8} px={4} py={6}>
          <Box>
            <Text color='gray.700' fontWeight='medium' fontSize='medium'>
              {city}
            </Text>
            <Text color='gray.400' fontSize='xs'>
              {country}
            </Text>
          </Box>
          <ChakraImage src={flag} alt={city} borderRadius='full' boxSize='30px' />
        </HStack>
      </VStack>
    </Link>
  );
};

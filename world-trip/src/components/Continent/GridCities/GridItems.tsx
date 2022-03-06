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

export const GridItems = () => {
  return (
    <Link href='/'>
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
          <Image
            src='/assets/continents/europe/london-card.jpg'
            alt='london'
            width={250}
            height={173}
          />
        </Box>
        <HStack spacing={8} px={4} py={6}>
          <Box>
            <Text color='gray.700' fontWeight='medium' fontSize='medium'>
              Londres
            </Text>
            <Text color='gray.400' fontSize='xs'>
              Reino Unido
            </Text>
          </Box>
          <ChakraImage
            src='https://flagcdn.com/w40/gb.png'
            alt='Londres'
            borderRadius='full'
            boxSize='30px'
          />
        </HStack>
      </VStack>
    </Link>
  );
};

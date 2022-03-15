import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react';
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
          <Image
            src={`https://unsplash.com/photos/${img}`}
            alt={city}
            htmlWidth={350}
            htmlHeight={173}
            loading='lazy'
            align='center'
          />
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
          <Image
            src={`https://flagcdn.com/w80/${flag}.png`}
            srcSet={`https://flagcdn.com/w80/${flag}.webp,
                    https://flagcdn.com/w160/${flag}.webp 2x`}
            borderRadius='full'
            boxSize='45px'
            loading='lazy'
            htmlWidth={40}
            htmlHeight={40}
            fit='fill'
            align='center'
            alt={country}
          />
        </HStack>
      </VStack>
    </Link>
  );
};

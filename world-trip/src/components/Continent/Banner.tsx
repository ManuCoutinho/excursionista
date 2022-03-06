import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  continent: string;
  image: string;
}

export const BannerContinent = ({ continent, image }: ContinentBannerProps) => {
  const path = `url(/assets/continents/${image}.jpg)`;
  return (
    <Flex
      w='100%'
      h='500px'
      bgImage={path}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      alignItems='flex-end'>
      <Heading ml={24} mb={8} color='gray.50' fontSize='5xl' fontWeight='semibold'>
        {continent}
      </Heading>
    </Flex>
  );
};

import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  continent: string;
  image: string;
  color: string;
}

export const BannerContinent = ({ continent, image, color }: ContinentBannerProps) => {
  const path = `url(/assets/continents/${image}.jpg)`;
  return (
    <Flex
      w='auto'
      h='600px'
      bgImage={path}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      alignItems='flex-end'>
      <Heading ml={24} mb={8} fontSize='5xl' fontWeight='semibold' color={color}>
        {continent}
      </Heading>
    </Flex>
  );
};

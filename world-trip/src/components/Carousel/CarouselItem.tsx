import { Flex, Heading, Text } from '@chakra-ui/react';

interface CarouselItemsProps {
  text: string;
  bgImg: string;
  description: string;
}

export const CarouselItem = ({ text, bgImg, description }: CarouselItemsProps) => {
  return (
    <Flex
      w='100%'
      h='450px'
      bgImage={bgImg}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      justify='center'
      alignItems='center'
      direction='column'>
      <Heading color='gray.50' mb={4} fontWeight='bold' fontSize='5xl'>
        {text}
      </Heading>
      <Text color='gray.50' fontWeight='bold' fontSize='xl'>
        {description}
      </Text>
    </Flex>
  );
};

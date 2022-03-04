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
      direction='column'
      color='yellow.500'>
      <Heading mb={4} fontWeight='bold' fontSize='5xl'>
        {text}
      </Heading>
      <Text fontWeight='bold' fontSize='2xl'>
        {description}
      </Text>
    </Flex>
  );
};

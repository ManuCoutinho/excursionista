import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Banner: React.FC = () => {
  return (
    <Flex
      w='100%'
      h='470px'
      bgImage="url('/assets/banner/bg.jpg')"
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      justify='center'>
      <Flex justify='space-around' align='center' mx='auto'>
        <Box maxW='container.sm' color='gray.50' p='4' mr='8'>
          <Heading fontWeight={500} fontSize='4xl' lineHeight='taller'>
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text fontSize='xl' mt='4' lineHeight='tall'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box mt='48'>
          <Image src='/assets/banner/airplane.svg' alt='Airplane' width={417} height={270} />
        </Box>
      </Flex>
    </Flex>
  );
};

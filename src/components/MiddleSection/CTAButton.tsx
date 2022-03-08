import { Box, Divider, Text } from '@chakra-ui/react';

export const CTAButton: React.FC = () => {
  return (
    <Box
      as='button'
      maxW='container.md'
      color='gray.600'
      textAlign='center'
      fontWeight='medium'
      lineHeight='tall'
      fontSize='3xl'
      _hover={{
        transform: 'scale(0.98)',
        textDecoration: 'underline'
      }}>
      <Divider />
      <Text mt='14'>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
    </Box>
  );
};

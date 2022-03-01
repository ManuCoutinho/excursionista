import { Box, Text } from '@chakra-ui/react';

export const CTAButton: React.FC = () => {
  return (
    <Box
      as='button'
      maxW='container.md'
      color='gray.600'
      textAlign='center'
      fontWeight='medium'
      lineHeight='tall'
      fontSize='3xl'>
      <Text>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
    </Box>
  );
};

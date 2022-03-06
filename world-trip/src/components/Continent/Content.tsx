import { Box, Text } from '@chakra-ui/react';
interface ContentProps {
  text: string;
}

export const ContinentContent = ({ text }: ContentProps) => {
  return (
    <Box>
      <Text fontSize='xl' lineHeight='tall' color='gray.600'>
        {text}
      </Text>
    </Box>
  );
};

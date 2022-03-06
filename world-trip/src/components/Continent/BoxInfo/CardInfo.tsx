import { Box, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardInfoProps {
  number: string;
  description: string;
  children?: ReactNode;
}

export const CardInfo = ({ number, description, children }: CardInfoProps) => {
  return (
    <Box>
      <Text color='yellow.500' fontSize='5xl' fontWeight='bold'>
        {number}
      </Text>
      <HStack>
        <Text color='gray.700' fontSize='xl' fontWeight='bold'>
          {description}
        </Text>
        <span>{children}</span>
      </HStack>
    </Box>
  );
};

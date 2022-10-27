import { Box, HStack, Text } from '@chakra-ui/react'
import { CardInfoProps } from './types'

export const CardInfo: React.FC<CardInfoProps> = ({ number, description, children }) => {
  return (
    <Box>
      <Text color='yellow.500' fontSize={['lg', 'xl', '3xl', '5xl']} fontWeight='bold'>
        {number}
      </Text>
      <HStack>
        <Text color='gray.700' fontSize='xl' fontWeight='bold'>
          {description}
        </Text>
        <span>{children}</span>
      </HStack>
    </Box>
  )
}

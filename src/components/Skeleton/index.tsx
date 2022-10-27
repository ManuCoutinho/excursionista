import {
  Box,
  Flex,
  Skeleton as ChakraSkeleton,
  SkeletonCircle,
  SkeletonText,
  VStack
} from '@chakra-ui/react'
import { SkeletonType } from './types'

export const Skeleton: React.FC<SkeletonType> = () => {
  return (
    <VStack spacing={4}>
      <ChakraSkeleton
        bg='blackAlpha.100'
        fadeDuration={1.5}
        p={2}
        boxShadow='lg'
        rounded='md'
        boxSize={[300, 350, 280]}
      />
      <Flex justifyContent='space-between' w='full' gap={6} py='2'>
        <Box bg='white' w='full'>
          <SkeletonText mt='4' noOfLines={2} spacing='4' />
        </Box>
        <SkeletonCircle size='10' />
      </Flex>
    </VStack>
  )
}

import { Button, Heading, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

interface ErrorProps {
  state: boolean;
}

export function Error({ state }: ErrorProps): JSX.Element {
  return (
    <Flex justifyContent='center' alignItems='center' h='100%' flexDir='column'>
      <Heading>Infelizmente ocorreu um erro =(</Heading>)
      <Skeleton
        isLoaded={state}
        bg='blackAlpha.100'
        fadeDuration={0.8}
        padding='6'
        boxShadow='lg'
        h='250px'
        boxSize={[400, 450, 350]}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={3} spacing='4' />
      </Skeleton>
      <Button py={6} onClick={() => window.location.reload()} mt={4}>
        Clique aqui para tentar novamente
      </Button>
    </Flex>
  );
}

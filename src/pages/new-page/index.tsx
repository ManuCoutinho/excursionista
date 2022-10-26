import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Flex, Text } from '@chakra-ui/react'

const NewPage: NextPage = () => {
  const router = useRouter()
  return (
    <Flex h='100vh' w='100vw' justify='center' align='center' direction='column'>
      <Text fontSize='4xl' textAlign='center' fontWeight='bold' color='blackAlpha.800'>
        Em breve um novo conteúdo! 🤩
      </Text>
      <Button
        py={6}
        px={[6, 12]}
        onClick={() => router.back()}
        mt={4}
        colorScheme='red'
        color='blackAlpha.800'
        fontSize='lg'
        size='lg'>
        Voltar
      </Button>
    </Flex>
  )
}

export default NewPage

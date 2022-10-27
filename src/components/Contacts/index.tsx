import { HStack, IconButton, Text, VStack, Link } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { AiOutlinePhone } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

export const Contacts: React.FC = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <VStack
        display='flex'
        justify='center'
        alignSelf='flex-start'
        spacing={[0, 4]}
        color='gray.600'
        fontSize={['xs', 'sm']}>
        <HStack spacing={[2, 4]} display='flex' alignSelf='flex-start'>
          <IconButton
            colorScheme='purple'
            aria-label='telefone'
            name='phone'
            icon={<AiOutlinePhone />}
            bgColor='transparent'
            color='red.600'
            size='lg'
            variant='outline'
          />
          <Text>+55 (41) 99999-9999</Text>
        </HStack>
        <HStack spacing={[2, 4]} display='flex' alignSelf='flex-start'>
          <Link
            href='mailto:contato.excursionista@gmail.com'
            isExternal
            display='flex'
            gap='2'
            alignItems='center'>
            <IconButton
              colorScheme='purple'
              name='email'
              aria-label='email'
              icon={<FiMail />}
              bgColor='transparent'
              color='red.600'
              size={'lg'}
              variant='outline'
            />
            <Text>contato.excursionista@gmail.com</Text>
          </Link>
        </HStack>
      </VStack>
    </IconContext.Provider>
  )
}

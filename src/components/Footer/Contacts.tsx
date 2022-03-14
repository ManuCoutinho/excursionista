import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

export function Contacts() {
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
            icon={<AiOutlinePhone />}
            bgColor='transparent'
            color='red.600'
            size='lg'
            variant='outline'
          />
          <Text>+55 (41) 99999-9999</Text>
        </HStack>
        <HStack spacing={[2, 4]} display='flex' alignSelf='flex-start'>
          <IconButton
            colorScheme='purple'
            aria-label='telefone'
            icon={<FiMail />}
            bgColor='transparent'
            color='red.600'
            size={'lg'}
            variant='outline'
          />
          <Text>contato.excursionista@gmail.com</Text>
        </HStack>
      </VStack>
    </IconContext.Provider>
  );
}

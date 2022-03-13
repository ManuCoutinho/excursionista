import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

export function Contacts() {
  return (
    <VStack display='flex' justify='center' alignSelf='flex-start' spacing={4} color='gray.600'>
      <HStack spacing={4} p={2} display='flex' alignSelf='flex-start'>
        <IconButton
          colorScheme='purple'
          aria-label='telefone'
          icon={<AiOutlinePhone size={25} />}
          bgColor='transparent'
          color='red.600'
          size='lg'
          variant='outline'
        />
        <Text>+55 (41) 99999-9999</Text>
      </HStack>
      <HStack spacing={4} p={2} display='flex' alignSelf='flex-start'>
        <IconButton
          colorScheme='purple'
          aria-label='telefone'
          icon={<FiMail size={25} />}
          bgColor='transparent'
          color='red.600'
          size='lg'
          variant='outline'
        />
        <Text>contato.excursionista@gmail.com</Text>
      </HStack>
    </VStack>
  );
}

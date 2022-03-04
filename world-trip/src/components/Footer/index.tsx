import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/react';
import { Logo } from '../Header/Logo';
import { Contacts } from './Contacts';
import { MenuList } from './MenuList';

export const Footer: React.FC = () => {
  const menuItem = [
    { id: 11, listItem: 'África', url: '/afric' },
    { id: 12, listItem: 'América do Norte', url: '/north-america' },
    { id: 13, listItem: 'América do Sul', url: '/latam' },
    { id: 14, listItem: 'Asia', url: '/asia' },
    { id: 15, listItem: 'Europa', url: '/europe' },
    { id: 11, listItem: 'Oceânia', url: '/oceania' }
  ];
  const socialItem = [
    { id: 211, listItem: 'Facebook', url: 'https://facebook.com' },
    { id: 212, listItem: 'Linkedin', url: 'https://linkedin.com' },
    { id: 213, listItem: 'Instagram', url: 'https://instagram.com' },
    { id: 214, listItem: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <Flex as='footer' justify='space-evenly' maxW={1280} p={16} color='gray.900'>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Divider mb={4} />
        <HStack spacing={10}>
          <Box>
            <MenuList menuItem={menuItem} text='Menu' />
          </Box>
          <Box alignSelf='flex-start'>
            <MenuList menuItem={socialItem} text='Redes Sociais' />
          </Box>
          <Contacts />
        </HStack>
      </Box>
    </Flex>
  );
};

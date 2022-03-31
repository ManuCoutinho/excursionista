import { Box, Divider, Flex, HStack, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import { Logo } from '../Header/Logo';
import { Contacts } from './Contacts';
import { MenuList } from './MenuList';

export const NavFooter: React.FC = () => {
  const menuItem = [
    { id: 11, listItem: 'África', url: '/africa' },
    { id: 12, listItem: 'América do Norte', url: '/north-america' },
    { id: 13, listItem: 'América do Sul', url: '/south-america' },
    { id: 14, listItem: 'Asia', url: '/asia' },
    { id: 15, listItem: 'Europa', url: '/europe' },
    { id: 18, listItem: 'Oceânia', url: '/oceania' }
  ];
  const socialItem = [
    { id: 211, listItem: 'Facebook', url: 'https://facebook.com' },
    { id: 212, listItem: 'Linkedin', url: 'https://linkedin.com' },
    { id: 213, listItem: 'Instagram', url: 'https://instagram.com' },
    { id: 214, listItem: 'Twitter', url: 'https://twitter.com' }
  ];
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const showContacts = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Flex as='footer' justify='center' w='100%' py={[6, 8, 12, 16]} color='gray.900'>
      {isLargerThan1024 && (
        <Box>
          <Logo />
        </Box>
      )}
      <Box>
        <Divider mb={4} role='separator' />
        <Flex gap={[6, 8, 10]} direction='row'>
          <Box>
            <MenuList menuItem={menuItem} text='Menu' />
          </Box>
          <Box alignSelf='flex-start'>
            <MenuList menuItem={socialItem} text='Redes Sociais' />
          </Box>
          {showContacts && <Contacts />}
        </Flex>
        {!showContacts && <Contacts />}
      </Box>
    </Flex>
  );
};

import { Box, Divider, Flex, HStack, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';
import { Logo } from '../Header/Logo';
import { Contacts } from './Contacts';
import { MenuList } from './MenuList';

interface IMenuItem {
  listItem?: string;
  url: string;
  text?: string;
}
export const NavFooter: React.FC = () => {
  const menuItem: IMenuItem[] = [
    { text: 'Menu', url: '' },
    { listItem: 'África', url: '/africa' },
    { listItem: 'América do Norte', url: '/north-america' },
    { listItem: 'América do Sul', url: '/south-america' },
    { listItem: 'Asia', url: '/asia' },
    { listItem: 'Europa', url: '/europe' },
    { listItem: 'Oceânia', url: '/oceania' }
  ];
  const socialItem: IMenuItem[] = [
    { text: 'Redes Sociais', url: '' },
    { listItem: 'Facebook', url: 'https://facebook.com' },
    { listItem: 'Linkedin', url: 'https://linkedin.com' },
    { listItem: 'Instagram', url: 'https://instagram.com' },
    { listItem: 'Twitter', url: 'https://twitter.com' }
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
            <MenuList menuItem={menuItem} />
          </Box>
          <Box alignSelf='flex-start'>
            <MenuList menuItem={socialItem} />
          </Box>
          {showContacts && <Contacts />}
        </Flex>
        {!showContacts && <Contacts />}
      </Box>
    </Flex>
  );
};

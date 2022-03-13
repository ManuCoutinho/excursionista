import { Box, IconButton, Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NavButton } from './NavButton';
import { ToggleColor } from './ToggleColor';

export const Header: React.FC = () => {
  return (
    <Flex
      as='header'
      justify='space-around'
      p={4}
      pos='fixed'
      w='100%'
      bgColor='gray.50'
      zIndex={1}
      boxShadow='md'>
      <NavButton />
      <Box>
        <Logo />
      </Box>
      <ToggleColor />
    </Flex>
  );
};

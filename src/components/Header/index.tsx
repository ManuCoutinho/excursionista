import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NavButton } from './NavButton';
import { ToggleColor } from './ToggleColor';

export const Header: React.FC = () => {
  const color = useColorModeValue('gray.50', 'gray.800');
  return (
    <Flex
      as='header'
      justify='space-around'
      p={4}
      pos='fixed'
      w='100%'
      bgColor={color}
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

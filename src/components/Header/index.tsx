import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ToggleColor } from './ToggleColor';

export const Header: React.FC = () => {
  return (
    <Flex justify='center' p={4} cursor='pointer'>
      <Link href='/'>
        <Logo />
      </Link>
      <ToggleColor />
    </Flex>
  );
};

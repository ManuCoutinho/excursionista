import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <Link href='/'>
      <Flex justify='center' p={7}>
        <Logo />
      </Flex>
    </Link>
  );
};

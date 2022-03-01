import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex justify='center' p={7}>
      <Image src='/assets/logo.svg' alt='logo World Trip' height={45} width={186} role='logo' />
    </Flex>
  );
};

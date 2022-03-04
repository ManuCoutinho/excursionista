import Image from 'next/image';

export const Logo = () => {
  return (
    <Image src='/assets/logo/logo.svg' alt='logo World Trip' height={45} width={186} role='brand' />
  );
};

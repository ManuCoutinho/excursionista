import Image from 'next/image'
export const Logo: React.FC = () => {
  return (
    <Image
      src='/assets/logo/logo.svg'
      alt='logo com a expressão Excursionista'
      height={50}
      width={300}
      role='img'
    />
  )
}

import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src='/assets/logo/logo.svg'
      alt='logo Excursionista'
      height={50}
      width={300}
      role='img'
    />
  )
}

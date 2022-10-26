import { useRouter } from 'next/router'
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { HomeButton } from './HomeButton'
import { ToggleColor } from './ToggleColor'
import { NavButton } from './NavButton'

import { Logo } from './Logo'

export const Header: React.FC = () => {
  const color = useColorModeValue('gray.50', 'gray.800')
  const { pathname } = useRouter()

  return (
    <Flex
      as='header'
      justify='space-around'
      p={4}
      pos='fixed'
      w='100%'
      bgColor={color}
      zIndex={1}
      boxShadow='lg'>
      <HStack align='center' spacing={[2, 4, 8]}>
        <NavButton />
        {pathname !== '/' && <HomeButton />}
      </HStack>
      <Box>
        <Logo />
      </Box>
      <ToggleColor />
    </Flex>
  )
}

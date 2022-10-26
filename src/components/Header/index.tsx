import { useRouter } from 'next/router'
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { NavButton } from 'components/NavButton'
import { ToggleColor } from 'components/ToggleButton'
import { Menu } from 'components/Menu'
import { Logo } from 'components/Logo'

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
        <Menu />
        {pathname !== '/' && <NavButton />}
      </HStack>
      <Box>
        <Logo />
      </Box>
      <ToggleColor />
    </Flex>
  )
}

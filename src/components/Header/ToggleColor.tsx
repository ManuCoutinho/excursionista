import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { MdOutlineWbSunny } from 'react-icons/md'
import { RiMoonClearLine } from 'react-icons/ri'

export function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <RiMoonClearLine size={25} /> : <MdOutlineWbSunny size={25} />}
        aria-label='change color'
        p={4}
        bg='transparent'
        variant='unstyled'
        color='purple.300'
        _hover={{
          color: 'yellow.500'
        }}
        _focus={{
          outline: 0
        }}
      />
    </Box>
  )
}

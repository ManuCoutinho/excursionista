import Link from 'next/link'
import { IconButton, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import { useMenu } from 'hooks/useMenu'

export const Menu: React.FC = () => {
  const { data } = useMenu()
  return (
    <ChakraMenu isLazy aria-haspopup>
      <MenuButton
        as={IconButton}
        icon={<IoMdMenu size={25} />}
        aria-label='Options'
        role='button'
        color='purple.300'
        transition='all 0.2s'
        size='lg'
        bg='transparent'
        _hover={{
          color: 'yellow.500'
        }}
        _focus={{
          boxShadow: 'none'
        }}
      />
      <MenuList role='menu' aria-orientation='vertical' mx='auto' mb='10px'>
        {data?.map(({ id, name, slug }) => (
          <Link
            href={{
              pathname: `/continent/${slug}`,
              query: { continent: id }
            }}
            key={`menu-:${id}:`}
            passHref
            legacyBehavior>
            <MenuItem role='menuitem'>{name}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </ChakraMenu>
  )
}

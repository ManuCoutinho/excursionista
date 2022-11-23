import Link from 'next/link'
import { IconButton, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'
import { menuLinks } from 'constants/navigation'
//todo: criar context para partilhar slug
export const Menu: React.FC = () => {
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
        {menuLinks?.map(({ url, id, listItem }) => (
          <Link
            href={{
              pathname: url,
              query: { continent: id }
            }}
            key={listItem}
            passHref
            legacyBehavior>
            <MenuItem role='menuitem'>{listItem}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </ChakraMenu>
  )
}

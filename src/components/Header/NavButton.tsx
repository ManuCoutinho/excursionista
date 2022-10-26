import Link from 'next/link'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMdMenu } from 'react-icons/io'

export const NavButton: React.FC = () => {
  const listItem = [
    { listItem: 'África', url: '/africa' },
    { listItem: 'América do Norte', url: '/north-america' },
    { listItem: 'América do Sul', url: '/south-america' },
    { listItem: 'Asia', url: '/asia' },
    { listItem: 'Europa', url: '/europe' },
    { listItem: 'Oceânia', url: '/oceania' }
  ]
  return (
    <Menu isLazy aria-haspopup>
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
        {listItem.map((item) => (
          <Link href={item.url} key={item.listItem}>
            <MenuItem role='menuitem'>{item.listItem}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  )
}

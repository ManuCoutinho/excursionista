import { Heading, List, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { idGenerator } from '../../utils/idGenerator';

interface IMenuItem {
  listItem?: string;
  url: string;
  text?: string;
}

type MenuItemProps = {
  menuItem: Array<IMenuItem>;
};
export function MenuList({ menuItem }: MenuItemProps) {
  return (
    <nav>
      {menuItem.map((item) => (
        <Heading fontSize='lg' fontWeight='semibold' color='red.600' mb={4} key={idGenerator()}>
          {item.text}
        </Heading>
      ))}
      <List fontSize={['xs', 'sm']} color='gray.600'>
        {menuItem.map((item) => (
          <Link href={item.url} key={idGenerator()} passHref>
            {item.text === 'Redes Sociais' ? (
              <ListItem
                aria-label={item.listItem}
                role='listitem'
                p={1}
                _hover={{
                  color: 'purple.300'
                }}>
                <ChakraLink rel='noreferrer noopener' isExternal>
                  {item.listItem}
                </ChakraLink>
              </ListItem>
            ) : (
              <ListItem
                p={1}
                _hover={{
                  color: 'purple.300'
                }}>
                <ChakraLink rel='noreferrer noopener'>{item.listItem}</ChakraLink>
              </ListItem>
            )}
          </Link>
        ))}
      </List>
    </nav>
  );
}

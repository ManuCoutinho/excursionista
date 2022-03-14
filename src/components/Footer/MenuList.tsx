import { Heading, List, ListItem } from '@chakra-ui/react';
import Link from 'next/link';

interface MenuItemProps {
  menuItem: [
    {
      id: number;
      listItem: string;
      url: string;
    }
  ];
  text: string;
}
export function MenuList({ menuItem, text }: MenuItemProps) {
  return (
    <nav>
      <Heading fontSize='lg' fontWeight='semibold' color='red.600' mb={4}>
        {text}
      </Heading>
      <List fontSize={['xs', 'sm']} color='gray.600'>
        {menuItem.map((item) => (
          <Link href={item.url} key={item.id}>
            <a>
              <ListItem
                p={1}
                _hover={{
                  color: 'purple.300'
                }}>
                {item.listItem}
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    </nav>
  );
}

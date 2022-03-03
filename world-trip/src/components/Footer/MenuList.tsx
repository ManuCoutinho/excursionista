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
    <>
      <Heading fontSize='lg' fontWeight='semibold' color='red.600' mb={4}>
        {text}
      </Heading>
      <List fontSize='sm'>
        {menuItem.map((item) => (
          <Link href={item.url}>
            <a>
              <ListItem
                key={item.id}
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
    </>
  );
}

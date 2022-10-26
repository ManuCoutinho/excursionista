import { Heading, List, ListItem, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { FooterLinkProps } from './types'

export const FooterLinks: React.FC<FooterLinkProps> = ({ links, subtitle }) => {
  return (
    <nav>
      <Heading fontSize='lg' fontWeight='semibold' color='red.600' mb={4} key={uuidv4()}>
        {subtitle}
      </Heading>
      <List fontSize={['xs', 'sm']} color='gray.600'>
        {links?.map((item) => (
          <Link
            key={uuidv4()}
            passHref
            legacyBehavior
            href={{
              pathname: item.url,
              query: { continent: item.id }
            }}>
            {subtitle === 'Redes Sociais' ? (
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
  )
}

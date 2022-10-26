import { Box, Grid, Heading } from '@chakra-ui/react'
import { GalleryItems } from 'components/GalleryItems'
import { v4 as uuidv4 } from 'uuid'
import { GridGalleryProps } from './types'

const GridGallery: React.FC<GridGalleryProps> = ({ items }) => {
  return (
    <Box as='section' w={['300', '700', '1024']} p={[4, 6, 12, 16]} mx='auto'>
      <Heading color='gray.700' fontWeight='semibold' fontSize='4xl' lineHeight='taller' mb={6}>
        Cidades +100
      </Heading>
      <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))' gap={[6, 8]}>
        {items?.map((item) => {
          return <GalleryItems {...item} key={uuidv4()} />
        })}
      </Grid>
    </Box>
  )
}
export default GridGallery

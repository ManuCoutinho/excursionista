import { Grid } from '@chakra-ui/react'
import { GridItems } from './GridItems'
import { idGenerator } from '../../../utils/idGenerator'

interface ItemsProps {
  items: Array<{
    image: string
    city: string
    country: string
    flag: string
    path: string
  }>
}

//todo import lazy
//if isLoading : error (spinner/error.msg)
// todo transformar chamada em hook

const GridComponent = ({ items }: ItemsProps) => {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(250px, 1fr))' gap={[6, 8]}>
      {items.map((item) => {
        return <GridItems items={item} key={idGenerator()} />
      })}
    </Grid>
  )
}

export default GridComponent

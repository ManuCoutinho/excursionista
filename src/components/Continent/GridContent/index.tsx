import { Grid } from '@chakra-ui/react'
import { BoxInfo } from '../BoxInfo'
import { ContinentContent } from './Content'

interface GridContentProps {
  city: string
  country: string
  language: string
  text: string
}
const GridContent = ({ city, country, language, text }: GridContentProps) => {
  return (
    <Grid
      templateColumns='repeat(auto-fit, minmax(250px, 1fr))'
      gap={[4, 6, 8, 12]}
      my={16}
      px={[2, 4, 6, 14]}
      mx='auto'>
      <ContinentContent text={text} />
      <BoxInfo country={country} language={language} city={city} />
    </Grid>
  )
}
export default GridContent

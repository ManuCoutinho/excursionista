import { Flex, Heading } from '@chakra-ui/react'
import { ContinentBannerProps } from './types'

export const BannerContinent: React.FC<ContinentBannerProps> = ({ continent, image, color }) => {
  const path = `url(/assets/continents/${image}.jpg)`
  return (
    <Flex
      w='auto'
      h='600px'
      bgImage={path}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      alignItems='flex-end'>
      <Heading ml={44} mb={8} fontSize='5xl' fontWeight='semibold' color={color}>
        {continent}
      </Heading>
    </Flex>
  )
}

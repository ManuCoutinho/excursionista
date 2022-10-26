import { Flex, useMediaQuery } from '@chakra-ui/react'
import { ActionButton } from 'components/ActionButton'
import { Slider } from 'components/Slider'
import { TravelIcons } from 'components/TravelIcons'

const MiddleSection: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 375px)')
  return (
    <Flex as='section' justify='center' direction='column' w='100%'>
      {!!isMobile && <TravelIcons />}
      <Flex justify='center'>
        <ActionButton />
      </Flex>
      <Flex>
        <Slider />
      </Flex>
    </Flex>
  )
}

export default MiddleSection

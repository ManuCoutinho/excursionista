import { HStack, Tooltip } from '@chakra-ui/react'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { CardInfo } from 'components/CardInfo'
import { BoxInfoProps } from './types'

export const BoxInfo: React.FC<BoxInfoProps> = ({ city, country, language }) => {
  return (
    <HStack spacing={[2, 4, 6, 12]} justify='center'>
      <CardInfo number={country} description='países' />
      <CardInfo number={language} description='idiomas'>
        <Tooltip
          hasArrow
          label='Fonte: Wikipedia'
          aria-label='info'
          placement='bottom'
          bgColor='whiteAlpha.700'
          color='gray.800'
          fontWeight='normal'
          fontSize='xs'>
          <span>
            <HiOutlineInformationCircle color='#47585B' />
          </span>
        </Tooltip>
      </CardInfo>
      <CardInfo number={city} description='cidades +100'>
        <Tooltip
          hasArrow
          label='Top 100 cidades mais visitadas no mundo'
          aria-label='info'
          placement='bottom'
          bgColor='whiteAlpha.700'
          color='gray.800'
          fontWeight='normal'
          fontSize='xs'>
          <span>
            <HiOutlineInformationCircle color='#47585B' />
          </span>
        </Tooltip>
      </CardInfo>
    </HStack>
  )
}

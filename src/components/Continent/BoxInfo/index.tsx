import { HStack, Tooltip } from '@chakra-ui/react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { CardInfo } from './CardInfo';

interface BoxInfoProps {
  country: string;
  language: string;
  city: string;
}

export const BoxInfo = ({ city, country, language }: BoxInfoProps) => {
  return (
    <HStack spacing={[4, 6, 8, 12]} justify='center'>
      <CardInfo number={country} description='países' />
      <CardInfo number={language} description='línguas' />
      <CardInfo number={city} description='cidades +100'>
        <Tooltip
          hasArrow
          label='Top 100 cidades mais visitadas no mundo'
          aria-label='info'
          placement='bottom'
          bgColor='gray.100'
          color='gray.800'
          fontWeight='normal'>
          <span>
            <HiOutlineInformationCircle color='#47585B' />
          </span>
        </Tooltip>
      </CardInfo>
    </HStack>
  );
};

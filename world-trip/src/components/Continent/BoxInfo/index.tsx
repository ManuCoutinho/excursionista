import { HStack, Tooltip } from '@chakra-ui/react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { CardInfo } from './CardInfo';

export const BoxInfo = () => {
  return (
    <HStack spacing={12} justify='center'>
      <CardInfo number='50' description='países' />
      <CardInfo number='60' description='línguas' />
      <CardInfo number='27' description='cidades +100'>
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

import { Flex, HStack } from '@chakra-ui/react';
import { TravelTypesIcons } from './TravelTypesIcons';
import { FaCocktail, FaUmbrellaBeach, FaGlobeAfrica } from 'react-icons/fa';
import { BsBuilding, BsBank } from 'react-icons/bs';
import { CTAButton } from './CTAButton';
import { Carousel } from '../Carousel';

//todo acertar spacing no breakpoint

export const MiddleSection: React.FC = () => {
  return (
    <Flex as='section' justify='center' direction='column'>
      <HStack spacing='20' mx='auto' mt='28' mb='20'>
        <TravelTypesIcons
          iconTravel={<FaCocktail size={60} />}
          ariaLabel='vida noturna'
          text='vida noturna'
        />
        <TravelTypesIcons
          iconTravel={<FaUmbrellaBeach size={60} />}
          ariaLabel='praia'
          text='praia'
        />
        <TravelTypesIcons
          iconTravel={<BsBuilding size={60} />}
          ariaLabel='moderno'
          text='moderno'
        />
        <TravelTypesIcons iconTravel={<BsBank size={60} />} ariaLabel='clássico' text='clássico' />
        <TravelTypesIcons
          iconTravel={<FaGlobeAfrica size={60} />}
          ariaLabel='e mais...'
          text='e mais...'
        />
      </HStack>
      <Flex justify='center' mb={14}>
        <CTAButton />
      </Flex>
      <Flex>
        <Carousel />
      </Flex>
    </Flex>
  );
};

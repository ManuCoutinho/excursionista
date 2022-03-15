import { Box, useMediaQuery, Wrap } from '@chakra-ui/react';
import { IconContext } from 'react-icons';
import { BsBuilding, BsBank } from 'react-icons/bs';
import { FaCocktail, FaUmbrellaBeach, FaGlobeAfrica } from 'react-icons/fa';
import { TravelTypesIcons } from './TravelTypesIcons';

export const WrapperIcons: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 800px)');
  const iconSize = isMobile ? '2.5em' : '1.25em';

  return (
    <Box>
      <Wrap
        spacing={[4, 6, 10, 16, 20]}
        mx='auto'
        justify='center'
        mt={[8, 12, 16, 20, 28]}
        mb={[8, 12, 16, 20]}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: iconSize }}>
          <TravelTypesIcons
            iconTravel={<FaCocktail />}
            ariaLabel='vida noturna'
            text='vida noturna'
          />
          <TravelTypesIcons iconTravel={<FaUmbrellaBeach />} ariaLabel='praia' text='praia' />
          <TravelTypesIcons iconTravel={<BsBuilding />} ariaLabel='moderno' text='moderno' />
          <TravelTypesIcons iconTravel={<BsBank />} ariaLabel='clássico' text='clássico' />
          <TravelTypesIcons iconTravel={<FaGlobeAfrica />} ariaLabel='e mais...' text='e mais...' />
        </IconContext.Provider>
      </Wrap>
    </Box>
  );
};

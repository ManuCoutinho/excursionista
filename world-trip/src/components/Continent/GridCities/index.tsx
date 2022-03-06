import { Box } from '@chakra-ui/react';
import { GridComponent } from './GridComponent';
import { HeadingComponent } from './Heading';

export const GridCities = () => {
  return (
    <Box as='section'>
      <HeadingComponent />
      <GridComponent />
    </Box>
  );
};

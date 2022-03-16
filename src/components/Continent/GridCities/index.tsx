import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { HeadingComponent } from './Heading';
interface GridCitiesProps {
  children: ReactNode;
}
export const GridCities = ({ children }: GridCitiesProps) => {
  return (
    <Box as='section' p={[16]} mx='auto'>
      <HeadingComponent />
      {children}
    </Box>
  );
};

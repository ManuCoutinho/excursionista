import { Box } from '@chakra-ui/react';
import { GridComponent } from './GridComponent';
import { HeadingComponent } from './Heading';
interface GridCitiesProps {
  img: string;
  city: string;
  country: string;
  flag: string;
  url: string;
}
export const GridCities = ({ city, country, flag, img, url }: GridCitiesProps) => {
  return (
    <Box as='section'>
      <HeadingComponent />
      <GridComponent city={city} country={country} flag={flag} img={img} url={url} />
    </Box>
  );
};

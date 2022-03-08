import { Grid } from '@chakra-ui/react';
import { GridItems } from './GridItems';

interface GridComponentsProps {
  img: string;
  city: string;
  country: string;
  flag: string;
  url: string;
}

export const GridComponent = ({ city, country, flag, img, url }: GridComponentsProps) => {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(150px, 1fr))' gap={8}>
      <GridItems city={city} country={country} flag={flag} img={img} url={url} />
    </Grid>
  );
};

import { Grid } from '@chakra-ui/react';
import { GridItems } from './GridItems';

export const GridComponent: React.FC = () => {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(150px, 1fr))' gap={8}>
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
    </Grid>
  );
};

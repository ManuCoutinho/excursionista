import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GridItems } from './GridItems';
import { idGenerator } from '../../../utils/idGenerator';
interface GridComponentsProps {
  children: ReactNode;
}

interface ItemsProps {
  items: Array<{
    image: string;
    city: string;
    country: string;
    flag: string;
    path: string;
  }>;
}

export const GridComponent = ({ items }: ItemsProps) => {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(230px, 1fr))' gap={[6, 8]}>
      {items.map((item) => {
        return <GridItems items={item} key={idGenerator()} />;
      })}
    </Grid>
  );
};

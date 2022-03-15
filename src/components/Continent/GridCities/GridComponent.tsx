import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface GridComponentsProps {
  children: ReactNode;
}

export const GridComponent = ({ children }: GridComponentsProps) => {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(230px, 1fr))' gap={6}>
      {children}
    </Grid>
  );
};

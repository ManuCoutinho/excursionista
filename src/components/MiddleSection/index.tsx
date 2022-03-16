import { Flex, useMediaQuery } from '@chakra-ui/react';
import { CTAButton } from './CTAButton';
import { Carousel } from '../Carousel';
import { WrapperIcons } from './WrapperIcons';

export const MiddleSection: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 375px)');
  return (
    <Flex as='section' justify='center' direction='column' w='100%'>
      {!!isMobile && <WrapperIcons />}
      <Flex justify='center'>
        <CTAButton />
      </Flex>
      <Flex>
        <Carousel />
      </Flex>
    </Flex>
  );
};

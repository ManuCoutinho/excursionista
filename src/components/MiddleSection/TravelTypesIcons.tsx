import { Flex, IconButton, Text } from '@chakra-ui/react';
interface TravelTypesProps {
  text: string;
  ariaLabel: string;
  iconTravel?: JSX.Element;
}

export function TravelTypesIcons({ text, ariaLabel, iconTravel }: TravelTypesProps) {
  return (
    <Flex w={[40, 55, 80, 100, 150]} alignItems='center' direction='column' justify='center'>
      <IconButton
        aria-label={ariaLabel}
        icon={iconTravel}
        bgColor='transparent'
        color='red.600'
        size='lg'
        variant='unstyled'
      />
      <Text
        w='inherit'
        mt={[2, 4, 6]}
        color='gray.600'
        fontSize={['10px', 'xs,', 'sm', 'md', 'lg', 'xl']}
        fontWeight={['normal', 'medium', 'semibold']}
        textAlign='center'>
        {text}
      </Text>
    </Flex>
  );
}

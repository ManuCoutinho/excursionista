import { Flex, IconButton, Text } from '@chakra-ui/react';
interface TravelTypesProps {
  text: string;
  ariaLabel: string;
  iconTravel?: JSX.Element;
}

export function TravelTypesIcons({ text, ariaLabel, iconTravel }: TravelTypesProps) {
  return (
    <Flex w={150} alignItems='center' direction='column'>
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
        mt='6'
        color='gray.600'
        fontSize='xl'
        fontWeight='semibold'
        textAlign='center'>
        {text}
      </Text>
    </Flex>
  );
}

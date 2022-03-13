import { Switch, useColorMode } from '@chakra-ui/react';

export function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <>
      <Switch onClick={toggleColorMode}>{colorMode === 'light' ? 'dark' : 'light'}</Switch>
    </>
  );
}

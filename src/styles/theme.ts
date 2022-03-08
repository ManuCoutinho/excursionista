import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#0B0A07',
      '800': '#181B23',
      '700': '#47585B'
    },
    red: {
      '600': '#FE4A49'
    },
    yellow: {
      '500': '#FFC759'
    },
    blue: {
      '400': '#1C7ED9'
    },
    purple: {
      '300': '#6D597A'
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900'
      }
    }
  }
});

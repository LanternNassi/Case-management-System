import { createTheme } from '@mui/material/styles';

export const PrimaryTheme = createTheme({
  palette: {
    primary: {
      main: '#011936',
    },
    secondary: {
      main: '#8AB36A',
    },
    background: {
      paper : "#E9EAEE",
      default : "#E9EAEE",
      
    },
    action: {
      active: "#590925",

      focus: "#590925",

      selected: "#590925",

    }
  },
  typography: {
    fontFamily: 'Figtree, sans-serif',
    fontSize: 15,
  },

});




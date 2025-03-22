'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

// Create vibrant theme for the CV website
const theme = createTheme({
  palette: {
    primary: {
      main: '#5e72e4', // Vibrant blue
      light: '#7795f8',
      dark: '#324cdd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f5365c', // Vibrant pink
      light: '#f56f91',
      dark: '#d40b33',
      contrastText: '#fff',
    },
    info: {
      main: '#11cdef', // Cyan accent
      light: '#32d8f7',
      dark: '#0bb2d4',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Geist',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

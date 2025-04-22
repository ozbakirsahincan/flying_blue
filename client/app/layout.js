'use client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Açık mavi (kontrast için)
    },
    background: {
      default: '#121212', // Ana arka plan
      paper: '#1e1e1e',    // Kartlar vb. için
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
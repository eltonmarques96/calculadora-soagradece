import GlobalStyle from '../styles/global';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/themes/primary';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

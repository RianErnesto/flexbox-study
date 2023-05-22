import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import SecondaryHeader from '../components/SecondaryHeader';
import GlobalStyles from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
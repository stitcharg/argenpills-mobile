import { Fragment, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/pagination.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Head from "next/head";
import { clarity } from 'react-microsoft-clarity';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  useEffect(() => {
    if (process.env.NODE_ENV != "development")
      clarity.init(
        process.env.NEXT_PUBLIC_CLARITY_ID
      );
  }, []);

  return (
    <Fragment >
      <Head>
        <title>Argenpills Mobile</title>
      </Head>
      <QueryClientProvider client={queryClient} >
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider >
    </Fragment >
  );
}

export default MyApp

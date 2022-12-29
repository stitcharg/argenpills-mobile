import { Fragment } from 'react'
import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

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

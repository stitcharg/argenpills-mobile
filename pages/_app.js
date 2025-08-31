import { Fragment, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/pagination.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Head from "next/head";
import { clarity } from 'react-microsoft-clarity';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
        retry: 1,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
    },
  });

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Argenpills Mobile - Información sobre pastillas" />
      </Head>
      <QueryClientProvider client={queryClient} >
        <Component {...pageProps} />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider >
    </Fragment >
  );
}

export default MyApp

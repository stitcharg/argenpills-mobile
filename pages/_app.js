import { Fragment } from 'react'
import '../styles/globals.css'
import '../styles/pagination.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <Fragment >
      <Head>
        <title>Argenpills Mobile</title>
      </Head>
      <QueryClientProvider client={queryClient} >
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider >
    </Fragment >
  );
}

export default MyApp

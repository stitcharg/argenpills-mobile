// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient} >
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
		</QueryClientProvider>
	)
}

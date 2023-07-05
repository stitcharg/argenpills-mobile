import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Index } from '../components/Index';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {	
	return (
		<>
			<Head>
				<title>Argenpills</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Index />
			</main>
		</>
	)
}

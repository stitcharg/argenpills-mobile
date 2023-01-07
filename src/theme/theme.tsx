import "@fontsource/raleway";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme(
	{
		styles: {
			global: {
				body: {
					fontSize: "1.2em"
				},
				h1: {
					letterSpacing: "-0.1em"
				},
				h2: {
					letterSpacing: "-0.1em"
				},
				a: {
					textDecoration: "underline"
				}
			}
		}
	},
	{
		fonts: {
			heading: `'RalewayVariable', sans-serif`,
			body: `'Raleway', sans-serif`,
		},
	},

);

export default theme
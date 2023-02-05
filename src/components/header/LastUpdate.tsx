import { Box, Text } from "@chakra-ui/react"
export const LastUpdate = () => {
	return (
		<Box textAlign="right" mr={{ base: 2, lg: 3 }}>
			<Text color="gray.600" fontStyle="italic" fontSize={{ base: 'small', md: 'smaller' }}>
				Ultima actualizaci&oacute;n: 3 de diciembre</Text>
		</Box>
	)
}
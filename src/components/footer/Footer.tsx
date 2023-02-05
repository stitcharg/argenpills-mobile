import { Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
	return (
		<Flex p={4} w="100%" justifyContent="center">
			<Text fontSize="sm" fontStyle="italic" color="gray.600">
				Todos los derechos reservados. No usar sin autorizacion</Text>
		</Flex>
	)
}
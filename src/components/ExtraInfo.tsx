import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react"

export const ExtraInfo = () => {
	return (
		<Box w="100%" bgColor="black" textColor="white" p={{ base: 2, sm: 2, lg: 20 }}>
			<HStack display={{ sm: "flex" }} alignItems="flex-start">
				<Box p={5}>
					<Heading size="xl" as="h2">Como calculamos esto?</Heading>
				</Box>
				<Box>
					<Text>
						El tiempo minimo entre tomas de MDMA debe ser 30 dias. Menos de esto, es muy perjudicial para tu salud, dado que la serotonina recien empieza a generarse nuevamente en el cerebro a los 20 dias de la toma. <br />
						Lo ideal es dejar +90 dias entre tomas. Mientras menos tomes, mejor te va a pegar.<br />
						Te invitamos a leer nuestro hilo en el foro dedicado a la tolerancia: <a href="https://argenpills.org/showthread.php?tid=2468">Que es la tolerancia?</a>
					</Text>
				</Box>
			</HStack>
		</Box>
	)
}
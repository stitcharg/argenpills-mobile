import { Heading, Box, Text, Image, VStack, Link } from "@chakra-ui/react"

export const HeaderComponent = () => {
	return (
		<Box as="section" p={5}>
			<Box display={{ sm: "flex" }}>
				<a href="https://argenpills.info"><Image src="/logo.png" alt="Argenpills Logo"></Image></a>
			</Box>
			<VStack>
				<Heading size="3xl" p={4} as="h1">
					Calculador de tolerancia
				</Heading>
				<Text>
					Usando esta aplicacion, vas a poder calcular tu tolerancia respecto al MDMA, y cuanto tiempo deberias esperar para volver a tomar. <br />
					Recuerden siempre esto es una guia, y <strong>a pesar de respetar los descansos y las dosis, no deja de ser una droga, a la cual hay que tenerle respeto</strong>
				</Text>
			</VStack>
		</Box>
	)
}
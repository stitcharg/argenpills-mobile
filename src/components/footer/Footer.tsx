import { Box, Container, Flex, Link, Stack, Text, VisuallyHidden, chakra, Image } from "@chakra-ui/react"
import { ReactNode } from "react";
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {

	const SmallLogo = (props: any) => {
		return (
			<Image src="/logo.png" alt="Argenpills Logo" height="40px"></Image>
		);
	  };

	const SocialButton = ({
		children,
		label,
		href,
	  }: {
		children: ReactNode;
		label: string;
		href: string;
	  }) => {
		return (
		  <chakra.button
			bg={'blackAlpha.100'}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
			  bg: 'blackAlpha.200'
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		  </chakra.button>
		);
	  };
	  	
	return (
		<Box
		bg={'gray.50'}
		color={'gray.700'}>
		<Container
		  as={Stack}
		  maxW={'6xl'}
		  py={4}
		  spacing={4}
		  justify={'center'}
		  align={'center'}>
		  <SmallLogo />
		  <Stack direction={'row'} spacing={6}>
			<Link href={'https://argenpills.org'}>Foro</Link>
			<Link href={'https://tolerancia.argenpills.info'}>Calculador de tolerancia</Link>
		  </Stack>
		</Container>
  
		<Box
		  borderTopWidth={1}
		  borderStyle={'solid'}
		  borderColor={'gray.700'}>
		  <Container
			as={Stack}
			maxW={'6xl'}
			py={4}
			direction={{ base: 'column', md: 'row' }}
			spacing={4}
			justify={{ base: 'center', md: 'space-between' }}
			align={{ base: 'center', md: 'center' }}>
			<Text fontSize={"small"}>
				© 2023. Todos los derechos reservados. 
				No usar sin autorizacion</Text>
			<Stack direction={'row'} spacing={6}>
			  <SocialButton label={'Twitter'} href={'https://www.twitter.com/argenpills'}>
				<FaTwitter />
			  </SocialButton>
			  <SocialButton label={'Telegram'} href={'https://t.me/argenpills_oficial'}>
				<FaTelegram />
			  </SocialButton>
			</Stack>
		  </Container>
		</Box>
	  </Box>

		// <Flex p={4} w="100%" justifyContent="center">
		// 	<Text fontSize="sm" fontStyle="italic" color="gray.600">
		// 		</Text>
		// </Flex>
	)
}
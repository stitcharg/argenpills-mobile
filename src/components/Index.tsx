import { Box, Flex, HStack, Spacer, Stack } from "@chakra-ui/react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { LastUpdate } from "./header/LastUpdate"
import { Search } from "./header/Search"
import { PillList } from "./pills/PillList"

export const Index = () => {
	return (
		<Box>
			<Flex p={4}>
				<Stack w="100%" direction={['column', 'row']} >
					<Header></Header>
					<Spacer></Spacer>
					<Search></Search>
				</Stack>
			</Flex>

			<LastUpdate></LastUpdate>

			<Flex p={4} w="100%">
				<PillList></PillList>
			</Flex>

			<Footer></Footer>
		</Box>
	)
}
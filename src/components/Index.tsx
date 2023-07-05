import { Box, Flex, HStack, Spacer, Stack } from "@chakra-ui/react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { LastUpdate } from "./header/LastUpdate"
import { Search } from "./header/Search"
import { PillList } from "./pills/PillList"
import pillStore from "@/context/pill.store"
import Pagination from "./UI/Pagination"
import { useState } from "react"
import { useQuery } from "react-query"
import fetchPills from "./API/fetchPills"

export const Index = () => {
	const activePage = pillStore(s => s.activePage);
	const fnSetActivePage = pillStore(s => s.setActivePage);
	const totalPages = pillStore(s => s.totalPages);

	const [searchText, setSearchText] = useState("");
	const fnSetTotalPages = pillStore(s => s.setTotalPages)
	const pillsPerPage = pillStore(s => s.pillsPerPage)

	const queryResults = (
		useQuery(['pills', searchText],
		  fetchPills,
		  {
			staleTime: 60000,
			refetchOnWindowFocus: false,
			keepPreviousData: true,
			onSuccess: (response) => {
			  if (response) {
				const totalRecords = response.length;
	
				const calculatedPages = Math.ceil(totalRecords / pillsPerPage);
	
				fnSetTotalPages(calculatedPages);
			  }
			}
		  },
		)
	  );	

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
				<PillList data={queryResults?.data}></PillList>
			</Flex>

			<Flex p={4} w="100%" justifyContent="center">
				<Pagination
					activePage={activePage}
					setActivePage={fnSetActivePage}
					pages={totalPages}/>
			</Flex>

			<Footer></Footer>
		</Box>
	)
}
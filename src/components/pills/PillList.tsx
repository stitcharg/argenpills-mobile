import { SimpleGrid } from "@chakra-ui/react"
import { Pill } from "./SinglePill"
import tempData from '../../../public/data.json';

export const PillList = () => {
	return (
		<SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={10} w="100%">
			{tempData.map(x => {
				return <Pill pill={x} key={x.id}></Pill>
			})}
		</SimpleGrid>
	)
}
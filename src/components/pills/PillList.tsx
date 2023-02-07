import { SimpleGrid } from "@chakra-ui/react"
import { Pill } from "./SinglePill"
import { iPill } from "../interfaces/iPill";
import tempData from '../../../public/data.json';

export const PillList = () => {
	const data: iPill[] = tempData;
	return (
		<SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={10} w="100%">
			{data.map(x => {
				return <Pill pill={x} key={x.id}></Pill>
			})}
		</SimpleGrid>
	)
}
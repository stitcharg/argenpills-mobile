import { SimpleGrid } from "@chakra-ui/react"
import { Pill } from "./SinglePill"
import { iPill } from "../interfaces/iPill";
import pillStore from "@/context/pill.store";

interface iPillListProps {
	data?: iPill[]
}

export const PillList = ({data}:iPillListProps) => {
	const pillsPerPage = pillStore(s => s.pillsPerPage);
	const activePage = pillStore(s => s.activePage);

	if (data == null) return <></>;

	const pageResults = (pills:iPill[]) => {
		if (pills.length < pillsPerPage) return pills;

		const skip = (pillsPerPage * activePage) - pillsPerPage;

		return pills.slice(skip, pillsPerPage + skip);
	}

	const pagedResults = pageResults(data);

	return (
		<SimpleGrid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' spacing={10} w="100%">
			{pagedResults.map(x => {
				return <Pill pill={x} key={x.id}></Pill>
			})}
		</SimpleGrid>
	)
}
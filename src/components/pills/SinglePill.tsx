import { Text, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Flex, Icon, HStack, Spacer, Divider, Tooltip, Box } from "@chakra-ui/react"
import { iPill, PIllLoadEnum, PIllSubstanceEnum, PillWarningEnum } from "../interfaces/iPill"
import { BadgeDangerous, BadgeWarning, MultiplesBagdes } from "./Badges"
import { CalendarIcon, ExternalLinkIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { LinkTest } from './LinkTest'
import { LinkAP } from "./LinkAP";

interface iPillProps {
	pill: iPill
}

export const Pill = ({ pill }: iPillProps) => {

	const calculateColor = (multiple?: boolean) => {
		return (multiple) ? "yellow.100" : "gray.200";
	}

	return (
		<Card variant="filled" bgColor={calculateColor(pill.multiple_batchs)}>
			<CardHeader>
				<Heading size='md'>{pill.name} {pill.color}
					{pill.warning == PillWarningEnum.DANGEROUS && <BadgeDangerous />}
					{pill.warning == PillWarningEnum.WARNING && <BadgeWarning />}
				</Heading>
			</CardHeader>

			<PillBody pill={pill}></PillBody>

			<Divider />

			<CardFooter>
				<HStack w="100%">
					<LinkAP ap_url={pill.ap_url}></LinkAP>
					<Spacer></Spacer>
					<LinkTest lab_image={pill.lab_image}></LinkTest>
				</HStack>
			</CardFooter>
		</Card>
	)
}

const PillBody = ({ pill }: iPillProps) => {

	const tDate = new Date(pill.posted_date);

	const ArFormatter = new Intl.DateTimeFormat('es-AR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	return (
		<CardBody>
			<Flex fontSize="smaller" justifyContent="right">
				<CalendarIcon mr={2} />
				<Text>{ArFormatter.format(tDate)}</Text>
			</Flex>

			<Flex justifyContent="center">
				<Image src={pill.image} w="200" pb={2} alt={pill.name + ' ' + pill.color}></Image>
			</Flex>

			{pill.multiple_batchs && <MultiplesBagdes></MultiplesBagdes>}

			<Divider />
			<ShowLoad load={pill.load}></ShowLoad>
			<Divider />

			<ShowSubstance substance={pill.substance}></ShowSubstance>

			{pill.notes &&
				<Box>
					<Divider />
					<Text p={1}><strong>Notas:</strong> {pill.notes}</Text>
				</Box>
			}
		</CardBody>
	)
}

interface iSubstanceProps {
	substance?: PIllSubstanceEnum
}

const ShowSubstance = ({ substance }: iSubstanceProps) => {
	if (substance == null) return <></>;

	let substanceLabel = "";

	switch (substance) {
		case PIllSubstanceEnum.MDMA:
			substanceLabel = "MDMA";
			break;
		case PIllSubstanceEnum.CATINONA:
			substanceLabel = "Catinonas";
			break;
	}

	return (
		<Text p={1}>
			<strong>Sustancia sospechada:</strong> {substanceLabel}
		</Text>
	)
}


interface iShowLoadProps {
	load?: PIllLoadEnum
}

const ShowLoad = ({ load }: iShowLoadProps) => {
	if (load == null) return <></>;

	const isHigh = (load: PIllLoadEnum) => {
		return (load == PIllLoadEnum.ALTA);
	}

	const isMed = (load: PIllLoadEnum) => {
		return (load == PIllLoadEnum.MEDIA);
	}

	const isLow = (load: PIllLoadEnum) => {
		return (load == PIllLoadEnum.BAJA);
	}

	let loadLabel = "";

	switch (load) {
		case PIllLoadEnum.ALTA:
			loadLabel = "Alta";
			break;
		case PIllLoadEnum.MEDIA:
			loadLabel = "Media";
			break;
		case PIllLoadEnum.BAJA:
			loadLabel = "Baja";
			break;
	}

	return (
		<HStack p={1}>
			<Text><strong>Carga:</strong> {loadLabel}</Text>
			{isHigh(load) &&
				<Tooltip hasArrow label='Cuando una pastilla es de carga alta se recomienda tomar de a mitades, y esperar el tiempo suficiente entre tomas (de 1 hora a 1 hora y media aprox.)' bg='red.600'>
					<Icon boxSize={6} as={ArrowUpIcon} color="red"></Icon>
				</Tooltip>
			}

			{isLow(load) &&
				<Icon boxSize={6} as={ArrowDownIcon} color="blue"></Icon>
			}
		</HStack>

	)
}


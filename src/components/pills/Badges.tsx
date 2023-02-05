import { Badge, Tag } from '@chakra-ui/react'
export const BadgeDangerous = () => {
	return (
		<Tag ml={2} colorScheme="red" variant="solid">
			PELIGROSA</Tag>
	)
}

export const MultiplesBagdes = () => {
	return (
		<Tag ml={2} colorScheme="gray" variant="solid" mb={2} mt={2}>
			M&uacute;ltiples tandas</Tag>
	)
}

export const BadgeWarning = () => {
	return (
		<Tag ml={2} colorScheme="yellow" variant="solid">
			Cuidado</Tag>
	)
}
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";

interface iLinkTextProps {
	lab_image?: string
}

export const LinkTest = (props: iLinkTextProps) => {
	if (props.lab_image == null) return <></>;

	return (<Button colorScheme="green">
			Ver Test
			<Icon ml={2} as={ExternalLinkIcon}></Icon></Button>);
}
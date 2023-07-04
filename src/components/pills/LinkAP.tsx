import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";

interface iLinkTextProps {
	ap_url?: string
}

export const LinkAP = (props: iLinkTextProps) => {
	if (props.ap_url == null) return <></>;

	return (<Button colorScheme="blue">
			Argenpills
			<Icon ml={2} as={ExternalLinkIcon}></Icon></Button>);
}
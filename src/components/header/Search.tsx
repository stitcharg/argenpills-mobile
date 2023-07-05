import { SearchIcon } from "@chakra-ui/icons"
import { IconButton, Input, Stack, Text } from "@chakra-ui/react"

export const Search = () => {
	return (
		<Stack direction={'row'}>
              <Input
                placeholder={'Ingrese las palabras para buscar'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                _hover={{
                  bg: 'blue.600',
                }}
                aria-label="Subscribe"
				icon={<SearchIcon />}
              />
            </Stack>
	)
}
import { Image } from "@chakra-ui/react"
import Link from "next/link"

export const Logo = () => {
	return (
		<Link href={"/"}>
			<Image src="/logo.png" alt="Argenpills Logo" width="311px"></Image>
		</Link>
	)
}
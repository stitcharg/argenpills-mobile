import React from "react";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/about"><img src="logo.png" alt="Logo" className="img-fluid" /></Link>
	)
}


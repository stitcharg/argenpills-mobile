import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="https://argenpills.org">
      <Image
        alt="Logo"
        className="img-fluid"
        src="/logo.png"
        width={80}
        height={80}
      />
    </Link>
  );
}

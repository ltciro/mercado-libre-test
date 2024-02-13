import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LOGO_SMALL } from "@meli/shared/constant/images-src";

interface LogoSmallProps {
  priority: boolean;
}

export default function LogoSmall({
  priority = false,
}: Readonly<LogoSmallProps>) {
  return (
    <Link href={"/"}>
      <Image
        src={LOGO_SMALL}
        alt="Mercado Libre Logo"
        width={44}
        height={32}
        priority={priority}
      ></Image>
    </Link>
  );
}

import React from "react";
import Image from "next/image";

import { LOGO_SMALL } from "@meli/constant/images-src";
import Link from "next/link";

interface ILogoSmall {
  priority: boolean;
}

export default function LogoSmall({ priority = false }: Readonly<ILogoSmall>) {
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

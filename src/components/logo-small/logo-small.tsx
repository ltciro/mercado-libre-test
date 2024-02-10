import React from "react";
import Image from "next/image";

import { LOGO_SMALL } from "@meli/shared/constant/images-src";

interface ILogoSmall {
  priority: boolean;
}

export function LogoSmall({ priority = false }: Readonly<ILogoSmall>) {
  return (
    <Image
      src={LOGO_SMALL}
      alt="Mercado Libre Logo"
      width={44}
      height={32}
      priority={priority}
    ></Image>
  );
}

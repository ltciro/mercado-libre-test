import Image from "next/image";
import Link from "next/link";

import { LOGO_SMALL } from "@meli/shared/constant/images-src";

export default function LogoSmall() {
  return (
    <Link href={"/"}>
      <Image
        src={LOGO_SMALL}
        alt="Mercado Libre Logo"
        width={44}
        height={32}
        priority
      ></Image>
    </Link>
  );
}

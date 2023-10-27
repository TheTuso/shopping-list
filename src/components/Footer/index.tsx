"use client";

import Link from "next/link";
import { StyledFooter } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      Simple NextJS APP with{" "}
      <Link href={"https://github.com/TheTuso/http-server"} target="_blank">
        backend written in GO
      </Link>
    </StyledFooter>
  );
}

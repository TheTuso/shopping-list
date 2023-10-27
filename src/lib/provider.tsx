"use client";

import GlobalStyles from "@/app/globalStyles";
import StyledComponentsRegistry from "./registry";

export default function Provider(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {props.children}
    </StyledComponentsRegistry>
  );
}

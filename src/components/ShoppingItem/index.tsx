"use client";

import { StyledButton, StyledItem } from "./styles";
import { Props } from "./types";

export default function ShoppingItem({ name, id, onDelete }: Props) {
  return (
    <StyledItem>
      <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
      <StyledButton
        type="button"
        aria-label="Remove item"
        onClick={() => onDelete(id)}
      >
        X
      </StyledButton>
    </StyledItem>
  );
}

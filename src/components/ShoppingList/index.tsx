"use client";

import useMagazine from "@/hooks/useMagazine";
import { useState } from "react";
import ShoppingItem from "../ShoppingItem";
import { StyledButton, StyledFlex, StyledInput, StyledList } from "./styles";

export default function ShoppingList() {
  const { items, addNewItem, deleteItemById, loading } = useMagazine();
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <StyledFlex>
        <StyledInput
          placeholder="Type item name"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <StyledButton
          onClick={() => {
            if (newItem !== "") {
              addNewItem(newItem);
              setNewItem("");
            }
          }}
        >
          Add
        </StyledButton>
      </StyledFlex>
      <StyledList>
        {loading ? (
          <>Loading magazine...</>
        ) : items.length === 0 ? (
          <>Nothing to buy</>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              name={item.name}
              id={item.id}
              onDelete={deleteItemById}
            />
          ))
        )}
      </StyledList>
    </>
  );
}

import { UUID } from "crypto";

const apiUrl = "https://go.tuso.pl/api/v1";

export type Item = {
  id: UUID;
  name: string;
};

export async function getItems() {
  const response = await fetch(`${apiUrl}/items`);
  const items = (await response.json()) as Item[];
  return items;
}

export async function addItem(name: string) {
  const response = await fetch(`${apiUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const item = (await response.json()) as Item;
  return item;
}

export async function deleteItem(id: string) {
  await fetch(`${apiUrl}/items/${id}`, {
    method: "DELETE",
  });
}

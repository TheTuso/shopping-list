import { Item, addItem, deleteItem, getItems } from "@/lib/magazine";
import { useEffect, useState } from "react";

export default function useMagazine() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMagazine() {
      setLoading(true);
      const items = await getItems();
      setItems(items ?? []);
      setLoading(false);
    }

    fetchMagazine();
  }, []);

  const addNewItem = async (name: string) => {
    const item = await addItem(name);
    setItems([...items, item]);
  };

  const deleteItemById = async (id: string) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return { items, addNewItem, deleteItemById, loading };
}

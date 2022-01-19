import { db } from "db";
import { useLiveQuery } from "dexie-react-hooks";
import { ICollection } from "../types/Collection";

export const useSearch = (query: string): ICollection[] => {
  const collections = useLiveQuery(() => db.collections.toArray()) ?? [];
  if (!query.trim()) return [];
  return collections.filter((collection) =>
    collection.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
};

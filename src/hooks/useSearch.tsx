import { db } from "db";
import { useLiveQuery } from "dexie-react-hooks";

export const useSearch = (query: string) => {
  const collections = useLiveQuery(() => db.collections.toArray());
  if (!query.trim()) return [];
  return collections?.filter((collection) =>
    collection.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
};

import { ICollection } from "../types/Collection";
import { useCollections } from "./useCollections";

export const useSearch = (query: string): ICollection[] => {
  const collections = useCollections((state) => state.collections);
  if (!query.trim()) return [];
  return collections.filter((collection) =>
    collection.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
};

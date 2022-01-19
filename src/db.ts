import Dexie, { Table } from "dexie";
import { ICollection } from "types/Collection";

export class MyLocalCollections extends Dexie {
  collections!: Table<ICollection>;

  constructor() {
    super("myCollections");
    this.version(1).stores({
      collections: "id, name, createdAt, updatedAt, favorite",
    });
  }
}

export const db = new MyLocalCollections();

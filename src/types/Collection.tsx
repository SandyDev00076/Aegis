import { IField } from "./Field";

export interface ICollection {
  id: string;
  name: string;
  fields: IField[];
  createdAt: string;
  updatedAt: string;
  favorite: boolean;
}

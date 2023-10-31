export type Nullable<T> = T | null;

export type Parent = number | string;

export interface IItem {
  id: number
  parent: string | number
  type?: Nullable<string>
}

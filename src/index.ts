import TreeStore from "./utils/TreeStore";
import { IItem, Nullable } from "../types";

const items: IItem[] = [
  { id: 1, parent: 'root' },
  { id: 2, parent: 1, type: 'test' },
  { id: 3, parent: 1, type: 'test' },

  { id: 4, parent: 2, type: 'test' },
  { id: 5, parent: 2, type: 'test' },
  { id: 6, parent: 2, type: 'test' },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items)

console.log('ts.getAll(): ', ts.getAll())
console.log('ts.getItem(7): ', ts.getItem(7))
console.log('ts.getChildren(4): ', ts.getChildren(4))
console.log('ts.getChildren(5): ', ts.getChildren(5))
console.log('ts.getChildren(2): ', ts.getChildren(2))
console.log('ts.getAllChildren(2): ', ts.getAllChildren(2))
console.log('ts.getAllParents(7): ', ts.getAllParents(7))

const root = document.getElementById('root')

root!.innerHTML = ''

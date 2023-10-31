import { IItem, Parent } from "../../types"

class TreeStore {
  protected items: IItem[]

  public constructor(items: IItem[]) {
    this.items = items
  }

  public getAll() {
    return this.items
  }

  public getItem(id: number) {
    return this.items.filter((item) => item.id === id)
  }

  public getChildren(id: Parent) {
    return this.items.filter((item) => item.parent === id)
  }

  public getAllChildren(id: Parent = 1) {
    return this.items.filter((item) => item.parent >= id)
  }

  public getAllParents(id: number) {
    const item = this.getItem(id)
    const { parent: parentId } = item[0]
    return this.searchAllParents(parentId as number)
  }

  protected searchAllParents (id: number) {
    const item = this.getItem(id)
    const parents: IItem[] = []
    const { parent } = item[0]
    parents.push(...item)
    if (parent && typeof parent !== 'string') {
      parents.push(...this.searchAllParents(parent))
    }
    return parents
  }
}

export default TreeStore
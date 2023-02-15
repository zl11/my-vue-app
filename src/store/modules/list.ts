import { defineStore } from 'pinia'
export interface Ilist {
  list: string[]
}
export const useStore = defineStore({
  id: 'list',
  state: (): Ilist => {
    return {
      list: []
    }
  },
  actions: {
    addItem(item: string) {
      this.list.push(item)
    },
    deleteItem(index: number) {
      this.list.splice(index,1)
    }
  }
})

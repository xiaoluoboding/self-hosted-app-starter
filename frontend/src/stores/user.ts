import { defineStore } from 'pinia'

type UserState = {
  userList: Model.User[]
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userList: []
  }),
  actions: {
    addUser(payload: Model.User) {
      this.userList.push(payload)
    }
  }
})

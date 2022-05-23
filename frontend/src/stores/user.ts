import { defineStore } from 'pinia'

type UserState = {
  userList: Map<number, User>
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userList: new Map()
  }),
  actions: {
    addUser(user: User) {
      this.userList.set(user.id, user)
    }
  }
})

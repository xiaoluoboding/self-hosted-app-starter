import { defineStore } from 'pinia'

import { getUserList } from '@/services'

type UserState = {
  userList: Map<number, User>
  currentUser: User
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userMap: new Map(),
    currentUser: {}
  }),
  getters: {
    userList(state: UserState): User[] {
      return Array.from(state.userMap.values())
    },
    isOwner(state: UserState): boolean {
      return state.currentUser.role === 'OWNER'
    }
  },
  actions: {
    addUser(user: User) {
      this.userMap.set(user.id, user)
    },
    setCurrentUser(user: User) {
      this.currentUser = user
    },
    removeUser(user: User) {
      this.userMap.delete(user.id)
    },
    updateUser(user: User) {
      this.userMap.set(user.id, user)
    },
    async fetchUserList() {
      const { data: userList } = await getUserList()
      userList.forEach((user) => this.addUser(user))
    }
  }
})

import API from '@/utils/api'
import { User, UserCreate, UserId, UserPatch } from '@/types/user'

export function createUser(userCreate: UserCreate) {
  return API.post<User>('/api/user', userCreate)
}

export function deleteUser(userId: UserId) {
  return API.delete<User>(`/api/user/${userId}`)
}

export function patchUser(userPatch: UserPatch) {
  return API.patch<User>(`/api/user/${userPatch.id}`, userPatch)
}

export function getUserList() {
  return API.get<User[]>('/api/user')
}

export function getUserInfo() {
  return API.get<User>('/api/user/me')
}

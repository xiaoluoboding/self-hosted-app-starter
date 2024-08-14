export type UserId = number
type TimeStamp = number
export type UserRole = 'OWNER' | 'USER'

export enum UserRoleEnum {
  OWNER = 'OWNER',
  USER = 'USER'
}

export interface User {
  id: UserId

  createdTs: TimeStamp
  updatedTs: TimeStamp

  email: string
  name: string
  role: UserRole
}

export interface UserCreate {
  email: string
  name: string
  role: UserRole
  password: string
}

export interface UserDelete {
  id: UserId
}

export interface UserPatch {
  id: UserId
  name?: string
  password?: string
}

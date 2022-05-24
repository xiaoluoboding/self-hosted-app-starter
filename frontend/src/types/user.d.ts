type UserId = number
type UserRole = 'OWNER' | 'USER'

export enum UserRoleEnum {
  OWNER = 'OWNER',
  USER = 'USER'
}

interface User {
  id: UserId

  createdTs: TimeStamp
  updatedTs: TimeStamp

  email: string
  name: string
  role: UserRole
}

interface UserCreate {
  email: string
  name: string
  role: UserRole
  password: string
}

interface UserDelete {
  id: UserId
}

interface UserPatch {
  name?: string
  password?: string
}

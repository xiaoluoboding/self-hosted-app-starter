type UserRole = 'OWNER' | 'USER'

declare namespace Model {
  interface BaseModel {
    id: string
    createdTs: number
    updatedTs: number

    createdAt: string
    updatedAt: string
  }

  interface User extends BaseModel {
    role: UserRole
    email: string
    name: string
  }
}

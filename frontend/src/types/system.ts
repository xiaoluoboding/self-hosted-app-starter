import { User } from './user'

export interface Profile {
  mode: string
  version: string
}

export interface SystemStatus {
  owner: User
  profile: Profile
}

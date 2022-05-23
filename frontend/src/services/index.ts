import API from '@/utils/api'

export function getSystemStatus() {
  return API.get<SystemStatus>('/api/status')
}

export function login(email: string, password: string) {
  return API.post<User>('/api/auth/login', {
    email,
    password
  })
}

export function signup(email: string, password: string, role: UserRole) {
  return API.post<User>('/api/auth/signup', {
    email,
    password,
    role,
    name: email
  })
}

export function signout() {
  return API.post('/api/auth/logout')
}

export function getUserList() {
  return API.get<User[]>('/api/user')
}

export function createUser(userCreate: UserCreate) {
  return API.post<User[]>('/api/user', userCreate)
}

export function getUserInfo() {
  return API.get<User>('/api/user/me')
}

export function patchUser(userPatch: UserPatch) {
  return API.patch<User>('/api/user/me', userPatch)
}

export default {
  getSystemStatus,
  getUserList,
  createUser,
  login,
  signup,
  signout,
  getUserInfo,
  patchUser
}

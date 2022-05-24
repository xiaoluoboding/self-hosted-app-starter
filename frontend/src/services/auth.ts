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
    name: email,
    role,
    password
  })
}

export function signout() {
  return API.post('/api/auth/logout')
}

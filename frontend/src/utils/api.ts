type ResponseObject<T> = {
  data: T
  error?: string
  message?: string
}

type RequestConfig = {
  method: string
  url: string
  data?: any
  dataType?: 'json' | 'file'
}

async function request<T>(config: RequestConfig): Promise<T> {
  const { method, url, data, dataType } = config
  const requestConfig: RequestInit = {
    method
  }

  if (data !== undefined) {
    if (dataType === 'file') {
      requestConfig.body = data
    } else {
      requestConfig.headers = {
        'Content-Type': 'application/json'
      }
      requestConfig.body = JSON.stringify(data)
    }
  }

  const response = await fetch(url, requestConfig)
  const responseData = (await response.json()) as ResponseObject<T>

  if (responseData.error || responseData.message) {
    throw new Error(responseData.error || responseData.message)
  }

  return responseData.data
}

export function getSystemStatus() {
  return request<API.SystemStatus>({
    method: 'GET',
    url: '/api/status'
  })
}

export function getUserList() {
  return request<Model.User[]>({
    method: 'GET',
    url: '/api/user'
  })
}

export function createUser(userCreate: API.UserCreate) {
  return request<Model.User[]>({
    method: 'POST',
    url: '/api/user',
    data: userCreate
  })
}

export function login(email: string, password: string) {
  return request<Model.User>({
    method: 'POST',
    url: '/api/auth/login',
    data: {
      email,
      password
    }
  })
}

export function signup(email: string, password: string, role: UserRole) {
  return request<Model.User>({
    method: 'POST',
    url: '/api/auth/signup',
    data: {
      email,
      password,
      role,
      name: email
    }
  })
}

export function signout() {
  return request({
    method: 'POST',
    url: '/api/auth/logout'
  })
}

export function getUserInfo() {
  return request<Model.User>({
    method: 'GET',
    url: '/api/user/me'
  })
}

export function updateUserinfo(
  userinfo: Partial<{ name: string; password: string; resetOpenId: boolean }>
) {
  return request<Model.User>({
    method: 'PATCH',
    url: '/api/user/me',
    data: userinfo
  })
}

const api = {
  getSystemStatus,
  getUserList,
  createUser,
  login,
  signup,
  signout,
  getUserInfo,
  updateUserinfo
}

export default api

import qs from 'qs'
import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'

axios.defaults.timeout = 90000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.withCredentials = true
axios.defaults.responseType = 'json'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.resolve(error.response)
  }
)

type ApiResponse<T> = {
  data: T
  error?: boolean
  message?: string
}

const mapData = (type: string, params: any) => {
  if (type === 'post') {
    return qs.stringify(params)
  }

  return null
}

function request<T>(
  url: string,
  type: string,
  params: any
): Promise<ApiResponse<T>> {
  const config = {
    method: type,
    url,
    params: type === 'get' ? params : null,
    data: params
  }
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response: AxiosResponse) => {
        const res: ApiResponse<T> = {
          data: response.data.data,
          error: response.status !== 200,
          message: response.statusText
        }
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}

export default {
  get: <T>(url: string, params?: any): Promise<ApiResponse<T>> =>
    request(url, 'get', params),
  post: <T>(url: string, params?: any): Promise<ApiResponse<T>> =>
    request(url, 'post', params),
  patch: <T>(url: string, params?: any): Promise<ApiResponse<T>> =>
    request(url, 'patch', params),
  delete: <T>(url: string, params?: any): Promise<ApiResponse<T>> =>
    request(url, 'delete', params)
}

// import { useAuthorizationStore } from "@/store/useAuthorizationStore";

export function setInterceptors(instance) {
  // 토큰 설정 부분
  // const authorizationStore = useAuthorizationStore(pinia)

  instance.interceptors.request.use(
    (config) => {
      // config.headers.Authorization = authorizationStore.TOKEN
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance
}


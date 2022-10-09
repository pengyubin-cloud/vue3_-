import useMainStore from '@/stores/modules/main'
import axios from 'axios'
import { BASE_URL,TIMEOUT } from "./config"

const mainStore = useMainStore()

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })


    this.instance.interceptors.request.use(config => {
      mainStore.loading = true
      return config
    },err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      mainStore.loading = false
      return res
    },err => {
      mainStore.loading = false
      return err
    })

  }
  
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL,TIMEOUT)


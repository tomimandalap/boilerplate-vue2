import axios from 'axios'
import store from '../store/index'
import router from '../router'

const Axios = () => {
  // request
  axios.interceptors.request.use(
    (res) => {
      const api_key = process.env.VUE_APP_API_KEY
      // set api key to global access
      if (!!api_key) {
        res.headers.Authorization = `${api_key}`
      }

      return res
    },
    (err) => {
      const code = err.response.status
      console.error('REQUEST', [code], err.response.statusText)
      return Promise.reject(err)
    },
  )

  // response
  axios.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {
      const code = err.response.status
      console.error('RESPONSE', [code], err.response.statusText)
      return Promise.reject(err)
    },
  )
}

export default Axios

import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.3.26:8080'

export function getApiFunc (url, params, type = 'post') {
  if (type.toLocaleLowerCase() === 'get') {
    return axios.get(url, { ...params }, { emulateJSON: false })
  } else {
    return axios.post(url, params, { emulateJSON: false })
  }
}

export function httpFunc (url, params, type = 'post') {
  return getApiFunc(url, params, type).then(res => {
    if (typeof res.data === 'object') { // && res.data.code === 0
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  }).catch(err => {
    return Promise.reject(err)
  })
}

export function FetchGetAccordionData (params) {
  return httpFunc('/json/accordion.json', params, 'get')
}


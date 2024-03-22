import axios from 'axios'

const baseURL = 'https://api.github.com'

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => {
  return axios({
    url,
    method,
    data,
    baseURL,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
      ...headers
    }
  })
}

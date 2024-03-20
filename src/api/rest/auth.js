import { makeRequest } from '../requests'

export const getAuthToken = (code) => {
  const url = 'https://webdev-api.loftschool.com/github'

  const clientId = process.env.VUE_APP_CLIENT_ID
  const clientSecret = process.env.VUE_APP_CLIENT_SECRET

  return makeRequest({
    url,
    method: 'post',
    data: {
      code,
      clientId,
      clientSecret
    }
  })
}

export const getUser = () => {
  const url = 'https://api.github.com/user'

  return makeRequest({
    url,
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`
    }
  })
}

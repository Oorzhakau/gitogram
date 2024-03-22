import { makeRequest } from '../requests'

export const getCode = () => {
  const githubApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', process.env.VUE_APP_CLIENT_ID)
  window.location.href = `${githubApi}?${params}`
}

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
  const url = '/user'

  return makeRequest({ url })
}

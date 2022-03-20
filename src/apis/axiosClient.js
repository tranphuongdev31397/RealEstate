import axios from 'axios'
import queryString from 'query-string'


const axiosClient = axios.create({
 baseURL: process.env.REACT_APP_API_URL,
 headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '9afea93228msh819defd1deccfaap13b432jsn94c959f5b7a4'
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
    //Handle token here
    return config
})
axiosClient.interceptors.response.use(response  => {
    if(response && response.data){
        return response.data
    }
    return response
}, err => {
    console.error(err)
})

export default axiosClient
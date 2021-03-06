const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080/api',
  });

export default function loginApi(email,password) {
    return axiosInstance.post('/users/login', {
        email:email,
        password:password
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
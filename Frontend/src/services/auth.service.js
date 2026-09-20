import api from './api.js'

const signupapi = (data) => {
    return api.post('/auth/sign-up',data)
}

const loginapi = (data) =>{
    return api.post('/auth/login',data)
}
export default {signupapi, loginapi}
import api from './api.js'

const signupapi = (data) => {
    return api.post('/auth/sign-up',data)
}

const loginapi = (data) =>{
    return api.post('/auth/login',data)
}

const logoutapi = () => {
    return api.post('/auth/logout')
}

export default {signupapi, loginapi, logoutapi}
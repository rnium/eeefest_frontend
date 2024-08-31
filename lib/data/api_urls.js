export const API_HOST = process.env.NEXT_PUBLIC_API_HOST

export const registerUrl = "/api/register/";

export const admin_endpoints = {
    login: '/auth/token/login/',
    logout: '/auth/token/logout/',
    userinfo: '/auth/users/me/',
    registrationlist: '/api/registrations/',
    responseExcel: '/responseexcel/',
    deleteReg: '/api/deleteregistration/'
}
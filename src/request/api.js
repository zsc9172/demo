import http from "./http.js"
import qs from 'qs';

export const login = data => {
    return new Promise((resolve, reject) => {
        http.post('/api/login/getJwtToken', data).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}

export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        http.post('/api/tools/getUserInfo').then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}

export const getUserList = data => {
    return new Promise((resolve, reject) => {
        http.post('/Api/SysUser/GetPageList', qs.stringify(data), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}

export const getUserEdit = data => {
    return new Promise((resolve, reject) => {
        http.post('/Api/SysUser/GetEdit', data).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}
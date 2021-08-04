import axios from 'axios'
import {
    Message
} from 'element-ui';
import qs from 'qs';

axios.defaults.timeout = 20000;
axios.defaults.baseURL = 'https://admin.coreshop.corecms.net/'; //填写域名
// axios.defaults.baseURL = '/api';
//http request 拦截器
axios.interceptors.request.use(config => {
    // console.log(config.headers.form, config.headers.form && config.headers.form.includes('form'))
    // if (config.headers.form && config.headers.form.includes('form')) {
    //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    //     config.log(123)
    // }
    // config.headers = {
    //     'Access-Control-Allow-Origin': '*',  //解决cors头问题
    //     'Access-Control-Allow-Credentials': 'true', //解决session问题
    //     'Authorization': sessionStorage.getItem('token') || '',
    // }
    config.headers['Access-Control-Allow-Origin'] = '*'  //解决cors头问题
    config.headers['Access-Control-Allow-Credentials'] = 'true'  //解决session问题
    config.headers['Authorization'] = sessionStorage.getItem('token') || ''
    return config;
},
    error => {
        return Promise.reject(err);
    }
);

//响应拦截器即异常处理``
axios.interceptors.response.use(response => {
    if (response && response.status) {
        switch (response.status) {
            case 200:
                if (response.data.code != 0) {
                    switch (response.data.code) {
                        case 401:
                            location.href = '/login';
                            break;
                        // case 301:
                        // 	Message('请绑定账号');
                        // break;
                        // case 500:
                        // 	Message('网络开了个小差!!!');
                        // break;
                        default:
                            Message(response.data.msg);
                            break;
                    }

                }
                return response.data;
                break;
            default:
                Message(response.data.data)
                break;
        }
    }

}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                Message.error('错误请求400')
                break;
            case 401:
                Message.error('错误请求401')
                break;
            case 403:
                Message.error('拒绝访问403')
                break;
            case 404:
                Message.error('请求错误,未找到该资源404')
                break;
            case 405:
                Message.error('请求方法未允许405')
                break;
            case 408:
                Message.error('请求超时408')
                break;
            case 500:
                Message.error('服务器端出错500')
                break;
            case 501:
                Message.error('网络未实现501')
                break;
            case 502:
                Message.error('网络错误502')
                break;
            case 503:
                Message.error('服务不可用503')
                break;
            case 504:
                Message.error('网络超时504')
                break;
            case 505:
                Message.error('http版本不支持该请求505')
                break;
            default:
                Message.error(`未知错误${err.response.status}`)
        }
    } else {
        Message.error('连接到服务器失败')
    }
    return Promise.resolve(err.response)
})


export default axios

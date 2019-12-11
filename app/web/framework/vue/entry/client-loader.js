'use strict';
module.exports = function(source) {
  this.cacheable();
  return `
    import render from 'client';
    import Page from '${this.resourcePath.replace(/\\/g, '\\\\')}';
    import axios from 'axios';
    // axios.defaults.baseURL = 'http://127.0.0.1:7001';
    let config = {}
    config.loginHost = 'http://127.0.0.1:7001'
    config.downloadHost = 'http://127.0.0.1:7001'
    axios.defaults.timeout = 15000;
    // axios.defaults.xsrfHeaderName = 'x-csrf-token';
    // axios.defaults.xsrfCookieName = 'csrfToken';
    // 添加请求拦截器
    console.log(EASY_ENV_IS_DEV)
    console.log(EASY_ENV_IS_TEST)
    console.log(EASY_ENV_IS_PROD)
    axios.interceptors.request.use((config)=>{
        // 在发送请求之前做些什么
        return config
    },(error)=>{
        // 对请求错误做些什么
        return Promise.reject(error);
    })
    // 添加 响应拦截器
    axios.interceptors.response.use((response)=>{
        // 对响应数据做点什么
        // 与服务器开发 约定 ：正常返回时， status = 200 不等于200，需要提示，但还需要 正常返回
        if(response.status === 200){
            return response.data;
        }
        // if (response.status == 302) {
        //     // console.log('hello')
        //     let targetUrl = window.location.href;
        //     window.location.href = 'http://venus.sogou-inc.com/public/sso/#/?returnUrl='+config.loginHost+'/public/parseUser&targetUrl=' + targetUrl;
        //     return
        // }
        return response.data;
    },(error)=>{
        // 对响应错误做点什么
        if(error.response && error.response.status && error.response.status=== 302){
            let targetUrl = window.location.href;
            window.location.href = 'http://venus.sogou-inc.com/public/sso/#/?returnUrl='+config.loginHost+'/public/parseUser&targetUrl=' + targetUrl;
            return
        }
        else{
            return Promise.reject(error);
        }
    })
    export default render({ ...Page });
  `;
};

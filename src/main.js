// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import router from './router'
// import App from './App.vue'
// Vue.config.productionTip=false
// new Vue({
//     router,
//     render:h=>h(App),

// }).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

createApp(App).use(router).use(VueAxios,axios).mount('#app')

//根据前端的跨域方式做调整
axios.defaults.baseURL='http://test-www.imooc.com/api';
axios.defaults.timeout=8000;
//根据环境变量获取不同的请求地址
axios.defaults.baseURL=env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status==0){
        return res.data;
    }
    else if(res.status==10){
        window.location.href='/#/login';
    }else{
        alert(res.msg);
    }
});
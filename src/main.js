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
createApp(App).use(router).mount('#app')

<template>
  <router-view>

  </router-view>
  <!-- <router-view/> -->
  
</template>

<script>

//import axios from 'axios'
//import jsonp from 'jsonp'
//import storage from "./storage/index"

export default {
  name: 'App',
  components: {
 
  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    //let url="https://mock.mengxuegu.com/mock/629e0221ee30d248b590ecbc/example/query"
    //CORS跨域
    // axios.get(url).then(()=>{

    // })
    //jsonp跨域
    // let url="/api/activity/servicetime";
    // jsonp(url,(err,res)=>{
    //   let result=res;
    //   this.data=result;
    // })

    //mock设置本地加载请求静态json文件
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // })

    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res;
    // });
   
    
  }
}
</script>

<style lang="scss">

@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';

</style>

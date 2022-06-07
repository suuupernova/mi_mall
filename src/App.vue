<template>
  
  <router-view></router-view>
</template>

<script>

// import axios from 'axios'
//import jsonp from 'jsonp'
export default {
  name: 'App',
  components: {
 
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

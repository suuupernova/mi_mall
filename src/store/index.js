import { createStore } from 'vuex';
import mutations from './mutations'
import actions from './action'

const state = {
  username:'',//登录用户名
  cartCount:0
}
export default createStore({
  state,
  mutations,
  actions
});
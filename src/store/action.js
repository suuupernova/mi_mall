//商城Vuex-actions
export default{
  saveUserName(context,username){
    context.commit('saveUsername',username);
  }
}
<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">取消</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">确定</a>
            <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">取消</a>
          </div>
          
        </div>
      </div>
    </div>
  </transition>
  

</template>

<script>
  export default{
    name:'modal',
    props:{
      //弹框类型：小、中、大
      modalType:{
        type:String,
        default:'form'
      },
      //弹框标题
      title:String,
      //按钮类型；1:只有确定按钮2：取消按钮3：确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cancelText:{
        type:String,
        default:'取消'

      },
      showModal:Boolean
    }
  }
</script>
<style lang="scss">
@import '../assets/scss/modal.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss'; 


// .modal{
//   @include position(fixed);
//   .mask{
//     @include position(fixed);
//     background-color: $colorI;
//     opacity: 0.5;
//   }
// }
</style>
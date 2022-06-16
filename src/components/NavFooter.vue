<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../../public/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">选购指南</a><span>|</span>
            <a href="">服务中心</a><span>|</span>
            <a href="">线下门店</a><span>|</span>
            <a href="">关于小米</a><span>|</span>
            <a href="">关注我们</a>
        </div>
        <div class="copyright">Copytight ©2022 <span>mi.future.com</span> All Rights Reserved</div>
    </div>
</template>
<script>
    export default{
        name:'nav-footer'
    }
</script>
<style lang="scss" scoped>
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: $fontI;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: $colorD;
                display: inline-block;
            }
            span{
                margin: 0 10px;

            }

        }
        .copyright{
            margin-top: 13px;
            span{
                color: $colorA;
            }
        }
    }
    

</style>
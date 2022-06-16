<template>
    <div class="service">
        <div class="container">
            <ul>
                <li>
                    
                    <span class="icon-setting">
                        
                    </span>
                    预约维修服务
                </li>
                <li>
                    
                    <span class="icon-7days">
                        
                    </span>
                    7天无理由退货
                </li>
                <li>
                    
                    <span class="icon-15days">
                        
                    </span>
                    15天免费换货
                </li>
                <li>
                    
                    <span class="icon-post">
                       
                    </span>
                    满150元包邮
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'service-bar'
    }
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
    .service{
        padding: 33px 0;
        color: $colorC;
        font-size: $fontI;
        li{
            display: inline-block;
            width: 24.9%;
            
            text-align: center;
            border-right: 1px solid $colorH;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
            .icon-setting{
                margin-right: 8px;
                @include bgImg(20px,20px,'../../public/imgs/icon-setting.png')
            }
            .icon-7days{
                margin-right: 8px;
                @include bgImg(20px,20px,'../../public/imgs/icon-7day.png')
            }
            .icon-15days{
                margin-right: 8px;
                @include bgImg(20px,20px,'../../public/imgs/icon-15day.png')
            }
            .icon-post{
                margin-right: 8px;
                @include bgImg(20px,20px,'../../public/imgs/icon-post.png')
            }

            
        }

    }
</style>
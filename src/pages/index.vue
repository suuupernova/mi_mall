<template>
    <div class="index">
        <div class="container">
            <div class="swiper">
                <swiper  
                    :navigation="true"
                    :effect="'cube'"
                    
                    :autoplay="{
                        delay: 4000,
                        disableOnInteraction: false,
                    }"
                    :cubeEffect="{
                        slideShadows:true,
                        shadow:true,
                        shadowOffsets:100,
                        shadowScale:0.6   
                    }"
                    :pagination="{
                        clickable: true,
                    }"
                    
                    :modules="modules"
                    
                >
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img" alt=""></a>
                    </swiper-slide>
                    <!-- <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                     -->
                     <!-- <div class="swiper-pagination"></div> -->
                </swiper>
                
            </div>
            <div class="ads"></div>
            <div class="banner"></div>
            
            <div class="product-box"></div>
        </div>

        <service-bar></service-bar>

    </div>

</template>
<script>
//import { Pagination, A11y, Autoplay } from 'swiper'
    import 'swiper/css';
    import "swiper/css/effect-cube";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, EffectCube, Pagination,Navigation } from "swiper";
    import ServiceBar from './../components/ServiceBar'
    
    export default{
        name:'index',
        components:{

            ServiceBar,
            Swiper,
            SwiperSlide,
            
        },
        setup() {
            return {
            modules: [EffectCube, Pagination, Autoplay,Navigation],
            };
        },
        data(){
            return{
                swiperOption:{
                    autoplay:true,
                    loop:true,
                    effect:'cube',
                    
                },
                slideList:[
                    {
                        id:'42',
                        img:'/imgs/slider/slide-1.jpg'
                    },
                    {
                        id:'45',
                        img:'/imgs/slider/slide-2.jpg'
                    },
                    {
                        id:'46',
                        img:'/imgs/slider/slide-3.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-4.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-5.jpg'
                    },
                ]
            }
        }
    }
    /* eslint-disable */
    // var mySwiper = new Swiper('.swiper',{
    //     effect : 'cube',
    //     cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 100,
    //     shadowScale: 0.6
    //     },
        // })
  
</script>
<style lang="scss">
    .index{
        .swiper{
            
                
                height: 451px;
                img{
                    width: 100%;
                }     
        }
    }
</style>


<template>
    <div class="index">
        <div class="container">
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电视 盒子</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">笔记本 平板</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">家电 插线板</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">出行 穿戴</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">智能 路由器</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电源配件</a>
                        <div class="children"></div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">生活箱包</a>
                        <div class="children"></div>
                    </li>
                </ul>
            </div>
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
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                    <img v-bind:src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            

        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key="j">
                                <span :class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-bind:src="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        <service-bar></service-bar>
        <modal title="提示" 
               sureText="查看购物车" 
               btnType="1" 
               modalType="middle" :showModal="true">
               <template v-slot:body>
                <p>商品添加成功</p>
               </template>
        </modal>

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
    import ServiceBar from './../components/ServiceBar.vue';
    import Modal from './../components/Modal.vue';

    
    export default{
        name:'index',
        components:{
            Modal,
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
                ],
                menuList:[
                    [
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ],
                adsList:[
                    {
                        id:33,
                        img:'/imgs/ads/ads-1.png'
                    },
                    {
                        id:48,
                        img:'/imgs/ads/ads-2.jpg'
                    },
                    {
                        id:45,
                        img:'/imgs/ads/ads-3.png'
                    },
                    {
                        id:47,
                        img:'/imgs/ads/ads-4.jpg'
                    }
                ],
                phoneList:[]
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                this.axios.get('/products',{
                    params:{
                        categoryId:100012,
                        pageSize:14
                    }
                }).then((res)=>{
                    this.phoneList=[res.list.slice(6,10),res.list.slice(10,14)]

                })
            }
        }
    }
  
</script>
<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
    .index{
        .container{
            .nav-menu{
                position: absolute;
                width: 264px;
                height:451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            display: block;
                            font-size: $fontI;
                            color: $colorG;
                            padding-left: 30px;
                            &:after{
                                position: absolute;
                                right: 30px;
                                top:17.5px;
                                content: " ";
                                @include bgImg(10px,15px,'../../public/imgs/icon-arrow.png')
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                background-color: $colorG;
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a{
                                    color:$colorB;
                                    font-size: $fontJ;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
            
            .swiper{
                .swiper-button-prev{
                    left: 274px;
                    color: $colorD;
                }
                .swiper-button-next{
                    color: $colorD;
                }
                height: 451px;
                img{
                    width: 100%;
                    
                } 
            }  
            .ads-box{
                @include flex();
                margin-top: 14px;
                margin-bottom: 31px;
                a{
                    width: 296px;
                    height: 167px;
                }
            }
            .banner{
                margin-bottom: 50px;
            }

                    
            
        }
        .product-box{
            background-color: $colorJ;
            padding: 30px 0 50px;
            h2{
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 10px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    margin-right: 16px;
                    img{
                        width: 224px;
                        height: 619px;
                    }
                    
                }
                .list-box{
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .item{
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                line-height: 24px;
                                font-size: $fontJ;
                                color: $colorG;
                                &.new-pro{
                                    background-color: #7ECF68;
                                }
                                &.kill-pro{
                                    background-color: #E82626;
                                }
                                
                            }
                            .item-img{
                                
                                img{
                                    width: 100%;
                                    
                                    height: 195px;
                                    margin: 0 auto;
                                }
                                

                            }
                            .item-info{
                                h3{
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height: $fontJ;
                                    font-weight: bold;
                                }
                                p{
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price{
                                    color: #f20a0a;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after{
                                        content: "";
                                        @include bgImg(22px,22px,'../../public/imgs/icon-cart-hover.png');
                                        margin-left: 5px;
                                        margin-bottom: 5px;
                                        vertical-align: middle;
                                    }

                                }
                            }
                        }
                            
                        }
                    }

                }
            }
        
    }
</style>


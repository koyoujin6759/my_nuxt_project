<template lang="">
    <div>
        <div class="main__visual__area">
            <div v-swiper:mySwiper="swiperOptions" class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(slide,idx) in mainBnr" :key="idx">
                        <img v-bind:src=mainBnr.bnrImg v-bind:alt="mainBnr.bnrImgAlt" class="main__visual__img">
                        <div class="main__visual__inner">
                            <div class="visual__inner__wrap">
                                <h2>{{mainBnr.bnrTitle}}</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
export default {
    components:{
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            mainBnr: {
                bnrImg: 'https://img.iipamaster.com/upload/bnr/20221121/20221121163716_2761.png',
                bnrImgAlt: 'img1',
                bnrTitle: 'title1',
                bnrSubtitle: '',
                bnrtxt:'1'
            },
            swiperOptions: {
                loop:true,
                slidesPerView:1,
                centerSlide:true,
                pagination:{
                    el:'.swiper-pagination',
                },
            }
        }
    },
    methods: {        
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/pages/main.scss";
</style>
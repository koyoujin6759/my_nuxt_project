<template lang="">
  <div class="main-page">
    <div class="main__visual__area">
      <div v-swiper:mySwiper="swiperOptions" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, idx) in mainBnr" :key="idx">
            <img
              v-bind:src="mainBnr.bnrImg"
              v-bind:alt="mainBnr.bnrImgAlt"
              class="main__visual__img"
            />
            <div class="main__visual__inner">
              <div class="visual__inner__wrap">
                <h2>{{ mainBnr.bnrTitle }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section__area section__class__area">
      <div class="section__inner__area" ref="gggggg">
        <div class="class__list__wrap list__layout__3 clear">
          <ClassList
            v-for="(list, idx) in classLists"
            :key="idx"
            :item="list"
            class="list-item"
          ></ClassList>
        </div>
      </div>
    </div>
    <div class="section__area section__class2__area">
      <div class="section__inner__area">
        <div class="class__list__wrap list__layout__5 clear">
          <ClassList
            v-for="(list, idx) in classLists"
            :key="idx"
            :item="list"
            class="list-item"
          ></ClassList>
        </div>
      </div>
    </div>
    <div class="section__area section__class3__area">
      <div class="section__inner__area">
        <div class="class__list__wrap list__layout__5 clear">
          <ul class="">
            <li v-for="(data, idx) in testData" :key="idx">{{ data.title }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section__area section__class__area">
      <div class="section__inner__area">
        <div class="class__list__wrap list__layout__5 clear">
          <p>{{ getCount }}</p>
          <p>{{ getUser }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import value from "@/mixin/value.js";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ClassList from "/components/ClassList/ClassList";
import api from "@/mixin/api"; //export default 자체

export default {
  mixins: [value, api],
  components: {
    Swiper,
    SwiperSlide,
    ClassList,
  },
  data() {
    return {
      mainBnr: {
        bnrImg:
          "https://img.iipamaster.com/upload/bnr/20221121/20221121163716_2761.png",
        bnrImgAlt: "img1",
        bnrTitle: "title1",
        bnrSubtitle: "",
        bnrtxt: "1",
      },
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        centerSlide: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      classLists: [
        {
          thumbImg:
            "https://img.iipamaster.com/good/1480/20220520182256_3347.png",
          thumbAlt: "",
          classTitle: "class title",
          classContent: "class content",
          ClassPrice: "30000",
          linkUrl: "https://www.naver.com/",
        },
        {
          thumbImg:
            "https://img.iipamaster.com/good/1480/20220520182256_3347.png",
          thumbAlt: "",
          classTitle: "class title",
          classContent: "class content",
          ClassPrice: "30000",
          linkUrl: "https://www.naver.com/",
        },
      ],
      testData: null,
    };
  },
  computed: {
    getCount() {
      return this.$store.getters["getCounter"];
    },
    getUser() {
      return this.$store.getters["user/getUser"];
    },
  },
  methods: {},
  
  created() {
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/pages/main.scss";
</style>

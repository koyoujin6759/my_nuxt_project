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
      <div class="section__inner__area">
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
    <ul class="test"></ul>
  </div>
</template>
<script>
import value from "@/mixin/value.js";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ClassList from "/components/ClassList/ClassList";
import "swiper/css/swiper.css";
import api from "@/mixin/api";
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
    };
  },
  methods: {},
  created() {
    // this.GetUserData().then(console.log);
    this.GetUserData();
  },
  mounted() {
    this.GetUserData()
      .then((response) => {
        const userDataItem = response.data;
        if (userDataItem) {
          let dataView = document.querySelector(".test");
          let dataItem = userDataItem
            .map((item) => {
              return `<li><p>${item.title}</p></li>`;
            })
            .join("");
          dataView.innerHTML = dataItem;
        }
      })
      .catch((error) => console.log(error));
    console.log(process.env.TEST_VARIABLE);
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/pages/main.scss";
</style>

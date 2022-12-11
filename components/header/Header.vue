<template lang="">
  <div>
    <header>
      <div class="header__inner">
        <div class="clear">
          <h1 class="header__logo__wrap">
            <router-link to="/" class="header__logo__link">logo</router-link>
          </h1>
          <!-- 로그아웃 상태 -->
          <div class="header__user__wrap" v-if="isLogin">
            <ul>
              <li v-for="(userLogOutMenu, idx) in userLogOutMenu" :key="idx">
                <router-link :to="userLogOutMenu.url" class="header__link">{{
                  userLogOutMenu.name
                }}</router-link>
              </li>
            </ul>
          </div>
          <!-- 로그인 상태 -->
          <div class="header__user__wrap" v-else>
            <ul>
              <li>
                <router-link :to="userLogInMenu[0].url">{{
                  userLogInMenu[0].name
                }}</router-link>
              </li>
              <li>
                <router-link :to="userLogInMenu[1].url">{{
                  userLogInMenu[1].name
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <HeaderNav></HeaderNav>
      </div>
    </header>
  </div>
</template>
<script>
import HeaderNav from "@/components/header/HeaderNav.vue";
import api from "@/mixin/api";
export default {
  mixins: [api],
  components: {
    HeaderNav,
  },
  data() {
    return {
      userLogOutMenu: [
        {
          url: "/login",
          name: "Login",
        },
        {
          url: "/join",
          name: "Join",
        },
      ],
      userLogInMenu: [
        {
          url: "/",
          name: "Logout",
        },
        {
          url: "/mypage",
          name: "mypage",
        },
      ],
      isLogin: false,
    };
  },
  computed: {},
  methods: {},
  created() {
  },
  mounted() {
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/components/header.scss";
</style>

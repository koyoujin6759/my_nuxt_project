<template lang="">
    <div>
        <Header></Header>
        <slot></slot>
        <Nuxt/>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import {sessionVerify} from "@/mixin/api"
export default {
    components : {
        Header,
        Footer
    },
    async beforeCreate() {
    const accessToken = window.localStorage.getItem("accessToken");

    if (!accessToken) return;

    const res = await sessionVerify(accessToken);
    console.log("res: ", res);
  },
}
</script>
<style lang="">
    
</style>
<template lang="">
    <div>
        <header>
            <div class="header__inner">
                <div class="clear">
                    <h1 class="header__logo__wrap">
                        <router-link to="./" class="header__logo__link">logo</router-link>                    
                    </h1>
                    <div class="header__user__wrap">
                        <ul>
                            <li v-for="(userMenu,idx) in userMenu" v-bind:key="idx">
                                <router-link :to="userMenu.url" class="header__link">{{userMenu.name}}</router-link>
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
import HeaderNav from '@/components/header/HeaderNav.vue' 
export default {
    components: {
        HeaderNav
    },
    data() {
        return {
            userMenu: [
                {
                    url:'/login',
                    name: 'Login'
                },
                {
                    url:'/join',
                    name: 'Join'
                }
            ],
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/layouts/header.scss";
</style>
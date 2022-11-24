<template lang="">
    <div>
        <nav class="header__nav__wrap">
            <ul>
                <li v-for="(menu,idx) in menus" :key="idx" >
                    <router-link :to="menu.url" class="header__logo__link" >{{menu.name}}</router-link> 
                    <div class="header__nav__depth2" 
                        v-if="menu.children" 
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave"   
                    >
                        <ul class="nav__depth2__dropdown " :class="{ 'isOpen':isOpen }">
                            <li v-for="(child,idx) in menu.children" :key="idx">
                                <router-link :to="child.url" class="header__logo__link">{{child.name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name:'HeaderNav',
    data() {
        return {
            isOpen:false,            
            menus: [
                {
                    url:'/',
                    name:'Home'
                },
                {
                    url:'/menu1',
                    name:'Menu1'
                },
                {
                    url:'/menu2',
                    name:'Menu2',
                    children: [
                        {
                            url:'/menu2-1',
                            name:'Menu2-1'
                        }
                    ]
                },
                {
                    url:'/menu3',
                    name:'Menu3'
                },
            ]
        }
    },
    methods: {
        mouseover: function() {
            this.isOpen = true;
        },
        mouseleave: function() {
            this.isOpen = false;
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/layouts/headerNav.scss";
</style>
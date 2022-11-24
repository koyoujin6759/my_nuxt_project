<template lang="">
    <div>
        <div class="class__list__type list__thumb__type">
            <div class="list__thumb__wrap">
                <router-link :to="item.linkUrl" >
                    <img v-bind:src=item.thumbImg v-bind:alt="item.thumbAlt"></img>
                </router-link>                
            </div>
            <div class="list__cont__wrap">
                <router-link :to="item.linkUrl" >
                    <p class="list-class__subject">{{item.classTitle}}</p>
                    <p>{{item.classContent}}</p>
                    <p>{{item.ClassPrice}}</p>
                </router-link>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ClassList',
    props: {    
        item : {
            type:Object,
            default:{}
        }
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/classList.scss";
</style>
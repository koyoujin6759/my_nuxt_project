<template lang="">
    <div class="app">
        <br>
        <!-- <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword"></SearchInput> -->
        <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
        <br></br>
        <ul class=""> 
            <li @click="moveToDetailPage(product.id)" class="item flex" v-for="product in products" :key="product.id">
                <img class="product-image" :src="product.imageUrl" :alt="product.name">
                <p>{{product.name}}</p>
                <span>{{product.price}}</span>
            </li>
          </ul>
    </div>
</template>
<script>
import axios from 'axios'
import {fetchProductsByKeyword} from "@/mixin/api";
import SearchInput from '/components/SearchInput/SearchInput'
export default {
    components: {
        SearchInput,
    },
    async asyncData() { 
        //asyncData 는 Pages 안에 파일에서만 사용할수있고, 페이지 진입 전에 호출되는 속성이므로 이 안에서 잘못된 로직이 있으면 페이지 진입이 되지 않는다. 또한 이안에서의 this 는 페이지 진입 전호출이기 때문에 data의 this를 가리킬수 없다. 새로고침시 깜박임이없다.
        const response = await axios.get('http://localhost:3000/products')
        console.log(response)
        const products = response.data.map(item => {
            return {
                ...item,
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,            
            }            
        })
        return {products}
    },
    data() {
        return {
            searchKeyword: '',
        }
    },    
    created() {
        
    },
    methods: {
        moveToDetailPage(id) {
            console.log(id)
            this.$router.push(`detail/${id}`)
        },
        // updateSearchKeyword(keyword) {
        //     this.searchKeyword = keyword
        // }
        async searchProducts() {
            const response = await fetchProductsByKeyword(this.searchKeyword)
            console.log(response);
            this.products = response.data.map(item => {
                return {
                    ...item,
                    imageUrl: `${item.imageUrl}?random=${Math.random()}`,            
                }            
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .flex {
    display: flex;
    justify-content: center;
    }
    .item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
    }
    .product-image {
    width: 400px;
    height: 250px;
    }
    .app {
    position: relative;
    }
    .cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
    }
    .cart-wrapper .btn {
    display: inline-block;
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
    }
    
</style>


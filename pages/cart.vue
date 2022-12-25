<template>
  <div class="container">
    <h1 class="list-title">cart page</h1>
    <div class="list-wrapper">
        <ul>
            <li class="list-item" v-for="(cartItem,idx) in $store.state.cartItems" :key="idx">
                <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name">
                <div class="description">
                    <p>{{cartItem.name}}</p>
                    <span>{{cartItem.price}}</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="extra-panel">
        <button>구매하기</button>
    </div>
</div>
</template>

<script>
import {FETCH_CART_ITEMS} from '@/store'
export default {
    async asyncData({store}) { //pages 안에 컴포넌트에서만 사용할수있음. 페이지 세팅전 서버에서 데이터 가져옴.
        await store.dispatch(FETCH_CART_ITEMS) //store actions 함수 호출할때까지 기다림. await를 붙이지않으면 페이지 진입 시 빈 화면.
    }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
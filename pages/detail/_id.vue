<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {fetchProductById} from "@/mixin/api";
export default {
    // created() {
    //     const id = console.log(this.$route.params.id)        
    // }
    async asyncData({params}) {
        // const id = console.log(this.$route.params.id);
        const response = await fetchProductById(params.id);
        const product = response.data;
        return {product}
    },
    methods: {
      addToCart() {
        this.$store.commit('product/addCartItem',this.product) //mutation 호출
        this.$router.push('/cart')
      }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }
    .product-image {
        width: 500px;
        height: 375px;
    }
    .side-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 220px;
        text-align: center;
        padding: 0 1rem;
    }
    button {
        border:1px solid #ccc;
        background:#f1f1f1;
    }
</style>
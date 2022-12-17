<template>
    <div class="input-wrapper">
        <input type="text" :value="value" @input="$emit('input',$event.target.value)" class="search-input">
        <button type="button" @click="$emit('search')" class="btn">search</button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: () => '',
        },
    },
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
  text-align: center;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
<template>
  <div>
    <div class="header">
      <div>
        <img class="header-img" :src="logoh" />
      </div>
      <div class="header-search">

        <TopMenuItem v-for="i in 6" v-model="selected" />
        <div class="header-search—box">
          <img class="header-search—img" :src="search">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='' setup>
import logoh from '~/assets/images/logo-h.png';
import search from '~/assets/images/search.png';

// 当前选择
const selected = ref('')

// 监听 selected 的变化
watch(selected, (newVal) => {
  if (newVal) {
    console.log('newVal: ', newVal);
  }
})
</script>

<style lang='scss' scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $top-submenus-height;
    padding: 0 40px;
    background: #ffffff;
    box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.06);
    &-img {
      cursor: pointer;
      flex-shrink: 0;
      width: 55px;
      height: 100%;
    }
    &-search {
    display: flex;
      &—box {
        border-radius: 50%;
        background: rgba(9, 70, 153, 0.10);
        padding: 5.5px;
        cursor: pointer;
      }
      &—img {
        flex-shrink: 0;
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
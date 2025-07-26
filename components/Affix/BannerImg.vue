<template>
  <div class="bg">
    <img class="bg-f" :style="{height: bannerImgHeightPx}" :src="bannerImg" />
  </div>
</template>

<script lang='' setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from "~/stores/useAppStore";

const appStore = useAppStore();
const imgUrl = `../assets/images/pct-hpcs.png`;
appStore.setBannerImg(imgUrl);
appStore.setBannerImgHeight(260);
const { bannerImg, bannerImgHeightPx } = storeToRefs(appStore)  // 必须响应式绑定！
</script>

<style lang='scss' scoped>
  .bg{
    &-f{
      width: 100%; 
      height: auto;
    }
  }
</style>
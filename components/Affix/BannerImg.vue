<template>
  <div class="bg">
    <img class="bg-f" :style="{height: bannerImgHeightPx}" :src="bannerImg" />
  </div>
</template>

<script lang='' setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useAppStore } from "~/stores/useAppStore";

const route = useRoute()
const appStore = useAppStore()

// 初始化设置
const initBanner = () => {
  // const imgUrl = `../assets/images/pct-hpcs.png`;
  const imgUrl = `/images/banner-${route.name}.png`;
  appStore.setBannerImg(imgUrl);
   // appStore.setBannerImgHeight(260);
  appStore.setBannerImgHeight(520) // 或根据路由动态设置不同高度
}

// 首次加载执行
initBanner()

// 监听路由变化
watch(
  () => route.name,
  (newName) => {
    if (newName) {
      initBanner()
    }
  }
)

const { bannerImg, bannerImgHeightPx } = storeToRefs(appStore) // 必须响应式绑定！

</script>

<style lang='scss' scoped>
  .bg{
    &-f{
      width: 100%; 
      height: auto;
    }
  }
</style>
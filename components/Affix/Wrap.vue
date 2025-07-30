<template>
  <div class="affix-container" :style="{height: containerHeightPx}">
    <el-affix target=".affix-container" :offset="0">
      <div class="">
        <slot></slot>
      </div>
    </el-affix>

    <!-- <banner-img bannerImgHeight="330"/> -->
    <AffixBannerImg />
  </div>
</template>

<script lang='' setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from "~/stores/useAppStore";

const appStore = useAppStore();
// appStore.setAffixHeight(310);
appStore.setAffixHeight(570);
const { containerHeightPx } = storeToRefs(appStore); // 必须响应式绑定！
</script>

<style lang="scss" scoped>
.affix-container {
  text-align: center;
}
</style>
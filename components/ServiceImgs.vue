<template>
  <div class="service-imgs">
    <el-carousel :interval="4000" type="card" indicator-position="outside" height="80vh">
      <el-carousel-item v-for="(img, index) in images" :key="index">
        <img class="service__img" :src="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const imageModules = import.meta.glob('~/assets/images/*.png', { eager: true, import: 'default' });

const images = [
  imageModules['/assets/images/pct-hpcs.png'],
  imageModules['/assets/images/automatic-system.png'],
  imageModules['/assets/images/e-hub.png'],
  imageModules['/assets/images/web-ip.png'],
];
</script>

<style lang='scss' scoped>
  .service-imgs{
    width: 100%;
    /* height: 100%; */
    .service__img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 让图片填满卡片并裁剪适配 */
      border-radius: 8px;
    }
  }
</style>
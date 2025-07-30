<template>
  <div class="service-imgs">
    <!-- <el-carousel :interval="4000" type="card" indicator-position="outside" height="80vh">
      <el-carousel-item v-for="(img, index) in images" :key="index">
        <img class="service__img" :src="img" />
      </el-carousel-item>
    </el-carousel> -->

    <div class="service__item" v-for="(item, index) in images" :key="index">
      <div class="service__img">
        <div class="service__label" v-if="index === 0">
          <h2>Services</h2>
          <h4>High quality</h4>
        </div>
        <img  :src="item.src" />
        <p class="service__value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageModules = import.meta.glob('~/assets/images/*.png', { eager: true, import: 'default' });

const images = [
  {src: imageModules['/assets/images/pct-hpcs.png'], value: "PCT HPCS"},
  {src: imageModules['/assets/images/automatic-system.png'], value: "Automatic System"},
  {src: imageModules['/assets/images/e-hub.png'], value: "eHub"},
  {src: imageModules['/assets/images/web-ip.png'], value: "Web IP"},
];
</script>

<style lang='scss' scoped>
  .service-imgs{
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    .service__img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 让图片填满卡片并裁剪适配 */
      border-radius: 8px;
      overflow: hidden;

      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .service__label {
      position: absolute;
      top: 30px;
      left: 44px;
      right: 0;
      color: white;
      
      h2{
        font-size: 36px;
        font-weight: bold;
      }
      h4{
        font-size: 24px;
      }
    }

    .service__value{
      position: absolute;
      bottom: 16px;
      left: 0;
      right: 0;
      color: white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .service__item {
      width: 25%;
      margin-right: 27px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
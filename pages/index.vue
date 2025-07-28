<template>
  <Swiper
    direction="vertical"
    :mousewheel="{ releaseOnEdges: true, sensitivity: 1 }"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :speed="100"
    class="swiper-cont"
    @slideChange="onSlideChange"
  >
    <SwiperSlide class="screen ">
      <PortService />
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <Anniversary />
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <ServiceImgs />
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <AisApp />
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <News />
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <div class="footer-bg__img">
        <div class="bg-cont">
          <h1>COSCO SHIPPING PORTS</h1>
          <h1>Piraeus Container Terminal Single Member S.A</h1>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="screen ">
      <BottomFooder />
    </SwiperSlide>
  </Swiper>
</template>

<script setup >
definePageMeta({
  layout: 'home'
})

import { Swiper, SwiperSlide } from 'swiper/vue'

const onSlideChange = (swiper) => {
  console.log('当前页', swiper.activeIndex)
}
</script>

<style lang="scss" scoped>
.swiper-cont {
  height: calc(100vh - $top-subtime-height - $top-submenus-height);
  width: 100%;
}
.screen {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-bg__img{
    height: 100%;
    width: 100%;
    background: url('~/assets/images/footer-img.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-cont{
      text-align: center;
      font-weight: 800;
      font-size: 50px;
      color: #FFFFFF;
    }
  }
}
.footer-box{
  height: 100%;
}
</style>

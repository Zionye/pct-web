<template>
  <div class="csr-profile">
    <div class="csr-profile__wrap">
      <div class="">
        <img :src="crsTitle" alt="">
      </div>
    </div>
  </div>
</template>

<script setup >
import crsTitle from '~/assets/images/crs-title.png';
</script>

<style lang="scss" scoped>
.csr-profile{
  background: rgba(252, 253, 255, 1);
  padding: 113px 0 107px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrap{
    width: 800px;
    height: 400px;
    background: url('~/assets/images/bg-csr.png') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

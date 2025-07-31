<template>
  <div class="the-autogate-system">
    <div class="the-autogate-system__header">
      <h4>Direct Access to the Autogate System</h4>
    </div>
    <div class="the-autogate-system__content">
      <div class="content-title">
        <h5>Direct Access to the Autogate System</h5>
      </div>
      <div class="content-wrap">
        <img :src="contentTheutogateproces" alt="">
      </div>
    </div>
  </div>
</template>

<script setup >
import contentTheutogateproces from '~/assets/images/content-theutogateproces.png';

</script>

<style lang="scss" scoped>
.the-autogate-system{
  &__header{
    font-weight: 800;
    font-size: 30px;
    color: #333333;
    margin-bottom: 30px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
    margin-bottom: 70px;
    .content-title{
      color: rgba(10, 71, 153, 1);
      margin-bottom: 18px;
      @apply flex justify-center items-center;
    }
    .content-wrap{
      @apply flex justify-center items-center;
    }
  }
}
</style>
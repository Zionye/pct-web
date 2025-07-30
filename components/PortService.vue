<template>
  <div class="port-service">
    <div class="port-service__content">
      <div class="tit-box">
        <img class="port-tit__img w-[714px] mb-[47px]" :src="port" />
        <img class="port-tit__img w-[694px]" :src="portInfo" />
      </div>
      <div class="i-box">
        <i class="i-img i-img__f"></i>
        <i class="i-img i-img__in"></i>
        <i class="i-img i-img__yt"></i>
      </div>
    </div>
  </div>
</template>

<script lang='' setup>
import port from '~/assets/images/port-service.png';
import portInfo from '~/assets/images/port-service-info.png';


</script>

<style lang='scss' scoped>
  .port-service{
    width: 100%;
    /* height: calc(100% - $top-subtime-height - $top-submenus-height); */
    height: 100%;
    background: url('~/assets/images/bg-home.png') no-repeat;
    background-size: cover;
    /* background-position: center; //可选：确保图片居中 */
    margin: 0;
    padding: 0;
    
    &__content{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 66px;
      padding-right: 20px;

      .tit-box{
        padding: 50px;
        background: rgba(0, 0, 0, 0.60);
      }
  
      .i-box{
        display: block;
        margin-top: 8px;
      }
      .i-img{
        display: flex;
        width: 24px;
        height: 24px;
        margin-bottom: 12px;
  
        &__f{
          background: url('~/assets/images/f-24.png') no-repeat;
          background-size: cover;
        }
        &__in{
          background: url('~/assets/images/in-24.png') no-repeat;
          background-size: cover;
        }
        &__yt{
          background: url('~/assets/images/youtube-24.png') no-repeat;
          background-size: cover;
        }
      }
    }

  }
</style>
<template>
  <div class="ais-app">
    <div class="tit-box">
      <img class="ais-tit__img w-[636px]" :src="ais" />
    </div>
    <div class="i-box">
      <h3>AIS app</h3>
      <p>
        MarineTraffic displays near real-time positions of ships and yachts worldwide. Connected to the largest network of AIS receivers, the app covers most major ports and shipping routes. - View VESSELS ON THE LIVE MAP, search for ships, boats and seaports and see what's near you!
      </p>
      <h4>Marine Traffic.com</h4>
      <div class="i-wrap">
        <div class="flex mr-[74px]">
          <i class="i-img i-img__iphone" />
          <el-button>download</el-button>
        </div>
        <div class="flex">
          <i class="i-img i-img__android" />
          <el-button>download</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='' setup>
import ais from '~/assets/images/bitmap.png';
import { reactive, toRefs, ref } from 'vue'


</script>

<style lang='scss' scoped>
  .ais-app{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 120px;
    padding-right: 80px;
    font-size: 20px;
    color: #333333;
    background: rgba(247, 247, 248, 1);

    .tit-box{
      flex: 1;
      margin-right: 96px;
    }

    .i-box{
      flex: 1;
      /* display: block; */
      margin-top: 8px;

      h3{
        font-size: 56px;
        margin-bottom: 38px;
      }
      h4{
        color: rgba(62, 193, 239, 1);
        font-weight: 600;
        margin-top: 24px;
      }
    }
    .i-wrap{
      display: flex;
      margin-top: 93px;
      
      .el-button{
        color: rgba(23, 88, 182, 1);
        border: 1px solid rgba(23, 88, 182, 1);
      }
    }
    .i-img{
      display: flex;
      width: 30px;
      height: 30px;
      margin-right: 6px;

      &__iphone{
        background: url('~/assets/images/iphone.png') no-repeat;
        background-size: cover;
      }
      &__android{
        background: url('~/assets/images/android.png') no-repeat;
        background-size: cover;
      }
    }
  }
</style>
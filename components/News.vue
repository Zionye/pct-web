<template>
  <div class="news">
    <div class="tit-box">
      <h3>Latest News</h3>
      <div class="new-tit">
        <img class="new-tit__img img-mb" :src="new1" />
      </div>
      <div class="txt-warp">
        <h4 class="ellipsis-lines txt-mt">Supporting vulnerable families inlocal communities for Easter</h4>
        <p class="ellipsis-lines">iraeus Container Terminal S.A. (PCT), a subsidiary of COSCO SHIPPING Port....</p>
      </div>
      <el-divider border-style="dashed" />
      <div class="txt-warp">
        <h4 class="ellipsis-lines txt-mt">Supporting vulnerable families inlocal communities for Easter</h4>
        <p class="ellipsis-lines">iraeus Container Terminal S.A. (PCT), a subsidiary of COSCO SHIPPING Port....</p>
      </div>
    </div>
    <div class="tit-box">
      <h3>Latest News</h3>
      <img class="new-tit__img img-mb" :src="new2" />
      <div class="txt-warp">
        <h4>Open tender for Reefer Monitoring &Plugging Services, with submissiondeadline</h4>
        <h4>23/04/2025,16:00</h4>
      </div>
      <el-divider border-style="dashed" />
      <div class="txt-warp">
        <h4>Open tender for Reefer Monitoring &Plugging Services, with submissiondeadline</h4>
        <h4>23/04/2025,16:00</h4>
      </div>
    </div>
    <div class="tit-box">
      <h3>Latest News</h3>
      <img class="new-tit__img img-mb" :src="new3" />
      <div class="txt-warp">
        <h4 class="txt-gray">Announcement of Cancellation of Container from Auction No. 88 /2025</h4>
        <h4 class="txt-gray">22.04.2025</h4>
      </div>
      <el-divider border-style="dashed" />
      <div class="txt-warp">
        <h4 class="txt-gray">Announcement of Cancellation of Container from Auction No. 88 /2025</h4>
        <h4 class="txt-gray">22.04.2025</h4>
      </div>
    </div>
  </div>
</template>

<script lang='' setup>
import new1 from '~/assets/images/news1.png';
import new2 from '~/assets/images/news2.png';
import new3 from '~/assets/images/news3.png';
import { reactive, toRefs, ref } from 'vue'


</script>

<style lang='scss' scoped>
  .news{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 66px;
    padding-right: 20px;

    .tit-box{
      width: 30%;
      padding-top: 20px;

      .txt-warp{
        min-height: 86px;
      }

      .ellipsis-lines {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;  /* 控制显示几行 */
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h3{
        font-size: 32px;
        font-weight: 600;
        color: #1D263A;
        margin-bottom: 20px;
      }
      .new-tit{
        width: 100%;
      }
      .new-tit__img{
        width: 100%;
        height: 100%;
      }
      h4{
        font-size: 18px;
        font-weight: 600;
        color: #094699;
        /* margin: 18px 0 8px; */
      }
      .txt-gray{
        color: #1B2437;
      }
      .img-mb{
        margin-bottom: 18px;
      }
      .txt-mt{
        margin-bottom: 8px;
      }
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
</style>
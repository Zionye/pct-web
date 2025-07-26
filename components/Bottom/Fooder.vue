<template>
  <div class="footer-box">
    <div class="footer-wrap">
      <div class="footer-wrap—con">
        <div>
          <h4>LOCATION</h4>
          <p class="txt-con">SEMPO NEO IKONIO</p>
          <img class="w-[216px]" :src="telInfo" />
          <div class="i-box">
            <img class="w-[97px]" :src="eeMap" />
            <i class="i-img i-img—map"></i>
          </div>
        </div>
        <div>
          <h4>DIRECTION</h4>
          <p class="txt-con">Driving Instructions To PCT</p>
          <div class="i-box">
            <img class="w-[163px]" :src="streetInfo" />
            <i class="i-img i-img—pdf"></i>
          </div>
          <div class="i-box">
            <img class="w-[163px]" :src="streetInfo" />
            <i class="i-img i-img—pdf"></i>
          </div>
        </div>
        <div>
          <h4>OPERATING HOURS</h4>
          <p class="txt-con w-[436px]">
            Piraeus Container Terminal operates 24/7, with the exception only of two (2) public holidays,Christmas and Greek Orthodox Easter.
          </p>
          <p>
            Shifts of Terminal: <span class="time-info">07:00 – 15:00 15:00 – 23:00 23:00 – 07:00</span>
          </p>
        </div>
      </div>

      <div class="footer-wrap—ft">
        <div class="flex items-center">
          <img class="w-[94px]" :src="logo" />
          <i class="i-img i-img—in"></i>
          <i class="i-img i-img—f"></i>
        </div>
        <div class="flex items-center">
          <p>PCT © 2025 All rights reserved.</p>
          <p class="ml-[30px]">G.E.MI. Number: 044791207000</p>
        </div>
      </div>
    </div>
    <BottomCookieSettings />
  </div>
</template>

<script lang='' setup>
import logo from '~/assets/images/logo-f.png';
import telInfo from '~/assets/images/tel-info.png';
import eeMap from '~/assets/images/ee-google-map.png';
import streetInfo from '~/assets/images/from-grLambraki-st.png';


</script>

<style lang='scss' scoped>
.footer-box{
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;
  width: 100%;
  height: calc(100% - $top-submenus-height);
}
  .footer-wrap{
    background: rgba(26, 6, 82, 1);
    /* height: 304px; */
    padding: 35px 40px 16px;
    color: #fff;
    font-size: 14px;

    &—con{
      display: flex;
      justify-content: space-between;

      h4{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 16px;
      }

      .txt-con{
        margin-bottom: 12px;
      }

      .time-info{
        color: rgba(62, 189, 236, 1);
      }
    }

    &—ft{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 52px;
      font-size: 13px;
    }

    .i-box{
        display: flex;
        align-items: center;
        margin-top: 8px;
      }
      .i-img{
        display: inline-flex;
        width: 12px;
        height: 12px;
        margin-left: 6px;

        &—map{
          background: url('~/assets/images/map.png') no-repeat;
          background-size: cover;
        }
        &—pdf{
          background: url('~/assets/images/file-pdf.png') no-repeat;
          background-size: cover;
        }

        &—in{
          width: 16px;
          height: 16px;
          margin-left: 40px;
          background: url('~/assets/images/in.png') no-repeat;
          background-size: cover;
        }
        &—f{
          width: 16px;
          height: 16px;
          margin-left: 30px;
          background: url('~/assets/images/f.png') no-repeat;
          background-size: cover;
        }
      }
  }
</style>
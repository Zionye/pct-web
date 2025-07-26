<template>
  <div class="anniversary">
    <div class="tit-box">
      <img class="pct-year__img w-[588px] h-[184px]" :src="pctYear" />
      <div class="year-box w-[528px]">
        <h3 class="year-h">15 Years’ anniversary of PCT’s operation</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <el-button type="primary" class="mt-[48px]">Click to see more</el-button>
      </div>
    </div>
    <el-tabs class="custom-tabs" type="border-card" v-model="activeName" @tab-click="handleTabClick">
      <el-tab-pane label="LONG TERM SCHEDULE" name="first">
        <div class="lts-con">
          <el-input v-model="longTerm" placeholder="type here..."></el-input>
          <p class="lts-txt">Search with Vessel Name or Vessel Operator or call Sign</p>
          <el-button>TRACK</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="WORKING VESSELS" name="second">WORKING VESSELS</el-tab-pane>
      <el-tab-pane label="SCHEDULE VESSELS" name="third">SCHEDULE VESSELS</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='' setup>
import pctYear from '~/assets/images/pct-year.png';

const activeName = ref('first');
const handleTabClick = (tab, event) => {
  console.log('tab, event: ', tab, event);
}

const longTerm = ref('');


</script>

<style lang='scss' scoped>
  .anniversary{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: rgba(247, 247, 248, 1);
    color: #262729;
    padding: 15% 12vh 0 7.3vh;

    .tit-box{
      /* max-width: 70vh; */

      .year-box{
        padding-left: 47px;
      }
      .year-h{
        font-size: 50px;
        padding: 48px 0 18px;
      }
    }

    .el-tabs {
      height: 538px;
      /* width: 450px; */
      margin-top: 13px;
      border-radius: 8px;
      border: 1px solid rgba(23,88,182,0.21);
      box-sizing: border-box;
    }
    .custom-tabs {
       :deep(.el-tabs__item) {
        flex: 0 0 150px;
        height: auto;
        white-space: normal;
        padding: 12px 0;
        text-align: center;
      }
      :deep(.el-tabs__nav) {
        display: flex;
        align-items: stretch; // 关键：让子项撑开整个父容器高度
        height: auto !important;
      }
      :deep(.el-tabs__nav-wrap),
      :deep(.el-tabs__nav-scroll) {
        height: auto !important;
        overflow: visible !important;
      }
      :deep(.el-tabs__header) {
        height: auto !important;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      /* :v-deep(.el-tabs__nav-prev),
      :v-deep(.el-tabs__nav-next) {
        display: none !important;
      } */
      ::v-deep(.el-tabs__item.is-active) {
        border-bottom: 2px solid #3186ff;
        font-weight: bold;
        color: #3186ff;
        box-sizing: border-box;
      }
    }
    .lts-con{
      margin: 104px 20px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .lts-txt{
        padding: 28px 0 113px;
        color: #181818;
      }
      .el-button{
        border-color: rgba(23, 88, 182, 1);
        color: #262729;
        padding: 14px 124px;
        width: 300px;
      }
    }
  }
</style>
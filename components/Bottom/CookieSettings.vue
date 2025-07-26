<template>
  <div class="cookie-settings">
    <h4 class="text-lg">Cookie settings</h4>
    <p class="text-sm mt-[12px]">We use cookies to provide you with the best possilble experience. They also allow us to analyze user behavior in ord the website for you.</p>
    <div class="mt-[27px]">
      <el-button type="primary">Reject All</el-button>
      <el-button type="primary">Accept Selection</el-button>
      <el-button >Accept all</el-button>
    </div>
  </div>
</template>

<script lang='' setup>

</script>

<style lang='scss' scoped>
  .cookie-settings{
    background: rgba(23, 88, 183, 1);
    color: #ffffff;
    /* font-size: 14px; */
    text-align: center;
    height: 168px;
    padding: 16px;

    .el-button{
      border-radius: 0px;
      padding: 8px 21px;
      font-size: 13px;
      border-color: #ffffff;
      color: rgba(23, 88, 183, 1);

      &--primary{
        background: rgba(23, 88, 183, 1);
        border-color: #ffffff;
        color: #ffffff;
        &:hover{
          border-color: #ffffff;
        }
      }
    }
  }
</style>
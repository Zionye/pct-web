<template>
  <div class="l-header ">
    <div class="hd-txt">
      <div class="hd-con">Athens 20.4°C     11:46    丨   Hong Kong  26.2°C      16:46</div>
    </div>
    <div class="t-btn">
      <el-button size="small" color="#1A0652">En</el-button>
      <el-button size="small" color="">Gr</el-button>
    </div>
  </div>
</template>

<script lang='' setup>


</script>

<style lang='scss' scoped>
.l-header{
  height: $top-subtime-height;
  padding: 0px 80px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: inset 0px 1px 1px 0px rgba(0,0,0,0.06);
  font-size: 14px;
  font-family: Arial;
}
.hd-txt{
  color: #666666;
  flex: 1;
  .hd-con{
    text-align: center;
  }
}
 .t-btn{
  display: flex;
   .el-button{
    margin-left: 3px;
   }
 } 
</style>
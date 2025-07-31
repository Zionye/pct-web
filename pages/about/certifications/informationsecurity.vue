<template>
  <div class="information-security">
   <div class="information-security__content" >
      <CardInfo class="information-security__card" :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 12" :key="item" @click="handleClick(item)" />
    </div>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>
  </div>
</template>

<script setup >

</script>

<style lang="scss" scoped>
.information-security{
  /* padding-bottom: 54px; */

  &__content{
    @apply flex flex-wrap;
    column-gap: 27px; // 控制列间距（左右间距）
    row-gap: 20px;    // 控制行间距（上下间距）
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 27px * 3) / 4); /* 总宽度减去3个gap，然后4等分 */
    box-sizing: border-box;
  }

  .pagination-box{
    display: flex;
    justify-content: center;
  }
}
</style>

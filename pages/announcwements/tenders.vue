<template>
  <div class="tenders">
    <div 
      v-for="item in 3" 
      :key="item" 
      :class="{'tenders-card': true, 'active': activeIndex === item}" 
      @click="handleClick(item)">
      <div class="flex">
        <div>
          <h4 class="card-idx">0{{ item }}.</h4>
        </div>
        <div class="ml-[80px] flex-1">
          <h4 class="card-tit">Open Tender for the provision of daily meals to employees, with submission deadline</h4>
          <div class="card-timer flex justify-between items-center">
            <p class="txt-b">PIRAEUS CONTAINER TERMINAL S.A.</p>
            <p>14/03/2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
const activeIndex = ref(1);
const handleClick = (idx) => {
  activeIndex.value = idx;
}

</script>

<style lang="scss" scoped>
.tenders{
  &-card{
    margin-bottom: 24px;
    padding: 38px 60px 34px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 1px solid rgba(223,223,223,0.7);
    font-size: 14px;
    color: #999999;
    cursor: pointer;
    &.active{
      border: 1px solid #1758B6;
    }

    .card-idx{
      font-weight: 800;
      font-size: 28px;
      color: #3CC2EF;
    }
    .card-tit{
      font-weight: 500;
      font-size: 28px;
      color: #262729;
      margin-bottom: 20px;
    }
    .txt-b{
      color: #1758B6;
      font-size: 18px;
    }
  }
}
</style>

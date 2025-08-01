<template>
  <div class="opportunities">
    <div class="opportunities__header text-b mb-[34px]">
      <h4>At PCT, we believe our people are the driving force behind our success—today and in the future.</h4>
    </div>
    <div class="opportunities__content mb-[70px]">
      <p class="mb-[34px]">
        That is why we consistently invest in our employee’s growth, offering incentives and continuous development opportunities. Our goal is to cultivate a workplace that empowers every employee to build a meaningful career path with long-term prospects. We are committed to maintaining a high-integrity, productive, and humane work environment where both professional and personal development are a priority.
      </p>
      <p class="text-b mb-[34px]">
        You may send us your CV to: cv@pct.com.gr
      </p> 
      <p>
        Your personal data will remain strictly confidential and will be processed by PCT HR Department solely for assessment purposes when job opportunities arise. Your CV will be kept on file for two years unless you request otherwise. 
      </p>
      <p>
        We agree with your suggestion concerning career opportunities.
      </p>
    </div>

    <div>
      <div class="mb-[35px]">
        <h2 class="txt-h txt-wt">JOBS</h2>
      </div>
      <div class="opportunities__jobs" >
        <CardInfo class="opportunities__card" :isReadMore="false" :isActive="selectedCard === item" :title="'Vehicle & Heavy Machinery Engineer'" :date="'05.04.2025'" v-for="item in 6" :key="item" @click="handleClick(item)" />
      </div>
    </div>

  </div>
</template>

<script setup >

const selectedCard = ref(6)
const handleClick = (item) => {
  selectedCard.value = item
}

</script>

<style lang="scss" scoped>
.opportunities{
  .text-b{
    color: rgba(10, 71, 153, 1);
  }
  .txt-wt{
    font-weight: 800;
  }
  &__header{
    font-size: 30px;
    color: #333333;
    margin-bottom: 28px;
  }
  &__content{
    font-size: 20px;
    color: #262729;
  }

  &__jobs{
    @apply flex flex-wrap;
    column-gap: 20px; // 控制列间距（左右间距）
    row-gap: 24px;    // 控制行间距（上下间距）
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 20px * 2) / 3);
    box-sizing: border-box;
  }
  :deep(.card-box__title){
    margin-bottom: 34px;
  }

  .txt-h{
    font-size: 50px;
    color: #333333;
  }
}
</style>

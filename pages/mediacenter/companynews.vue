<template>
  <div class="company-news">
    <div class="company-news__content" >
      <CardInfo class="company-news__card" :isActive="selectedCard === item" :title="'Operations Contacts'" :date="'24.04.2025'" v-for="item in 9" :key="item" @click="handleClick(item)">
        <!-- 匿名插槽内容 -->
        <div class="card-img">
          <img :src="bgCompanyNews" alt="">
        </div>

        <!-- 具名插槽 extraIntro -->
        <template #extraIntro>
          <div class="extra-text">
            <div class="flex justify-between items-center mb-[12px]">
              <h6 class="txt-h">News tittle </h6>
              <p class="txt-d">14.03.2025 </p>
            </div>
            <div>
              Piraeus Container Terminal S.A. (PCT), a subsidiary of COSCO SHIPPING Ports Ltd, remains committed to  …
            </div>
          </div>
        </template>

      </CardInfo>
    </div>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>
  </div>
</template>

<script setup >
import bgCompanyNews from "~/assets/images/bg-company-news.png";
const selectedCard = ref(6)
const handleClick = (item) => {
  selectedCard.value = item
}
</script>

<style lang="scss" scoped>
.company-news{
  /* padding-bottom: 54px; */

  &__content{
    @apply flex flex-wrap;
    gap: 32px;
    margin-bottom: 50px;
  }

  &__card{
    width: calc((100% - 32px * 2) / 3);
    box-sizing: border-box;
    .card-img{
      width: 100%;
      height: 240px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      overflow: hidden;
      /* margin-bottom: 14px; */
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .pagination-box{
    display: flex;
    justify-content: center;
  }

  .extra-text{
    padding: 18px 14px 24px;
    font-weight: 400;
    font-size: 20px;
    color: #333333;

    .txt-h{
      font-weight: 800;
      font-size: 24px;
      color: #262729;
    }
    .txt-d{
      font-weight: 400;
      font-size: 14px;
      color: #999999;
    }
  }
  :deep(.card-box__title),
  :deep(.card-box__date){
    display: none;
  }
  :deep(.card-info .card-box){
    padding: 0;
  }
}
</style>

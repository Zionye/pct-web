<template>
  <div class="financial-statements">
    <div>
      <div class="financial-statements__header">
        <h4>Choose years to download Financial statements</h4>
        <el-dropdown popper-class="custom-popper">
          <el-button @click="handleClick">
            {{ selectedYear }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown-menu">
              <el-dropdown-item
                class="wide-item"
                v-for="item in years" 
                :key="item.value" 
                @click="selectedYear = item.value"
                >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>
        <div class="financial-statements__content">
          <CardInfo :title="'Sustainability Repore 2025'" :date="''" v-for="item in 6" :key="item" class="financial-statements__card">
            <div class="card-img">
              <img :src="financialStatementsImg" alt="">
              <p class="card-img-time">{{ selectedYear }}</p>
            </div>
            <template v-slot:footer>
              <div class="w-full flex justify-center pb-[30px]">
                <div class="card-btn">
                  <i class="i-btn" />
                </div>
              </div>
            </template>
          </CardInfo>
        </div>
      </div>
    </div>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>
  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';
import financialStatementsImg from '~/assets/images/financialstatements-img.png';

const years = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
const selectedYear = ref(years[0].value); // 默认选择第一个年份
// const yearOptions = ref(years.map(year => ({ value: year.value, label: year.label })));

const handleClick = () => {
}
</script>

<style lang="scss" scoped>
.financial-statements{

  &__header {
    font-size: 30px;
    font-weight: 800;
    color: #333333;
    margin-bottom: 28px;
    @apply flex justify-between items-center;
  }

  &__content{
    @apply flex flex-wrap;
    gap: 27px;
    margin-bottom: 60px;
  }
  &__card{
    width: calc((100% - 27px * 2) / 3);
    box-sizing: border-box;
    .card-img{
      width: 100%;
      height: 304px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      overflow: hidden;
      margin-bottom: 14px;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .card-img-time{
        position: absolute;
        top: 50%; /* 从顶部向下移动50% */
        left: 50%;
        transform: translate(-50%, -50%); /* 向上移动自身高度的50% */
        font-size: 56px;
        color: #FFFFFF;
      }
    }
    .card-btn{
      .i-btn{
        cursor: pointer;
        display: block;
        width: 90px;
        height: 36px;
        background: url('~/assets/images/financialstatements-btn.png') no-repeat;
        background-size: cover;
        background-position: center;
        &:hover {
          background: url('~/assets/images/financialstatements-btn-active.png') no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }

  .pagination-box{
    display: flex;
    justify-content: center;
  }

  :deep(.card-info .card-box){
    padding: 0;
  }
  :deep(.card-box__title){
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>

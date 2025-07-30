<template>
  <div class="scholarships-program">
    <div class="flex justify-end">
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
      <div class="scholarships-program__content" >
        <CardInfo class="scholarships-program__card" isBgGray :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 6" :key="item">
          <div class="card-img">
            <img :src="scholarshipsBg" alt="">
          </div>
        </CardInfo>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';
import scholarshipsBg from '~/assets/images/scholarships-bg.png';

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
.scholarships-program{

  &__content{
    @apply flex flex-wrap;
    gap: 20px; // 设置项目间距
    margin-top: 20px;
  }

  &__card{
    width: calc((100% - 40px) / 3); /* 总宽度减去两个gap，然后三等分 */
    box-sizing: border-box;
    .card-img{
      width: 100%;
      height: 236px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 14px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  :deep(.card-box__title){
    margin-bottom: 20px;
  }
  :deep(.card-info .card-box){
    padding: 16px 16px 21px;
  }
}
</style>

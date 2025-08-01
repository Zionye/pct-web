<template>
  <div class="unclaimed-cargo">
    <div class="flex mb-[28px]">
      <div class="mr-[20px]">
        <el-dropdown popper-class="year-custom-popper">
          <el-button @click="handleClickYear">
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
        <el-dropdown popper-class="auction-custom-popper">
          <el-button @click="handleClickAuction">
            {{ selectedAuction }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="custom-dropdown-menu">
              <el-dropdown-item
                class="wide-item"
                v-for="item in auctions" 
                :key="item.value" 
                @click="selectedAuction = item.value"
                >
                {{ item.value }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="unclaimed-cargo__content" >
      <CardInfo class="unclaimed-cargo__card" :isActive="selectedCard === item" :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 12" :key="item" @click="handleClick(item)">
        <div class="card-img">
          <img :src="scholarshipsBg" alt="">
        </div>
      </CardInfo>
    </div>

    <div class="pagination-box">
      <el-pagination background layout="prev, pager, next" :total="90" />
    </div>

  </div>
</template>

<script setup >
import { ArrowDown } from '@element-plus/icons-vue';

const selectedCard = ref(6)
const handleClick = (item) => {
  selectedCard.value = item
}

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
const handleClickYear = () => {
}

const auctions = [
  { value: 'Announcement of Auction', label: 'Announcement of Auction' },
];
const selectedAuction = ref(auctions[0].value);
const handleClickAuction = () => {
}
</script>

<style lang="scss" scoped>
.unclaimed-cargo{
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

<template>
  <div class="philosophy">
    <div class="philosophy__header">
      <h4>Message from Captain Wang Jihang</h4>
    </div>
    <div class="philosophy__content">
      <div class="philosophy__image text">
        <img :src="philosophyCont" alt="">
      </div>
      <div class="philosophy__image person">
        <img :src="philosophyPerson" alt="">
      </div>
    </div>
    <el-divider />
    <div class="philosophy__header">
      <h4>History –Milestones</h4>
    </div>
    <div>
      <div class="t-btn">
        <el-button 
          v-for="item in years" 
          :key="item.value" 
          :class="{ active: selectedYear === item.value }" 
          :color="selectedYear === item.value ? '#1758B6' : undefined"
          @click="selectedYear = item.value"
          >
          {{ item.label }}
        </el-button>
      </div>
      <div class="year-wrap">
        <template v-for="item in 3">
          <div class="year-content">
            <div class="year-image">
              <img src="" alt="">
            </div>
            <div class="year-h">
              <p class="mr-[26px]">2022</p>
              <p>March</p>
            </div>
            <div class="year-p">
              Start of works of the project of Upgrade of the Eastern Section of Pier II
            </div>
          </div>
        </template>
      </div>
    </div>
   
  </div>
</template>

<script setup >
import philosophyCont from '~/assets/images/philosophy-cont.png';
import philosophyPerson from '~/assets/images/philosophy-person.png';

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
// 监听年份选择变化
watch(selectedYear, (newYear) => {
  console.log('Selected year changed to:', newYear);
  // 在这里可以添加逻辑来处理年份变化，比如加载对应年份的历史数据
});
</script>

<style lang="scss" scoped>
.philosophy{
  .el-divider--horizontal{
    margin-top: 79px;
  }
  .el-button{
    border-radius: 0;
    &:hover {
      color: #000000;
      background: rgba(23,88,182,0.08);
      border: 1px solid #1758B6;
    }
    &.active{
      padding-left: 64px;
      padding-right: 64px;
    }
  }

  .t-btn{
    margin-bottom: 60px;
  }

  &__header {
    font-size: 24px;
    color: rgba(23, 88, 182, 1);
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .philosophy__image {
      margin: 0 10px;

      img {
        width: 100%;
        height: auto;
        /* object-fit: cover; */
        /* object-position: center; */
      }
    }

    .text{
      /* flex: 1; */
      /* width: 70%; */

    }
    .person{
      max-width: 306px;
      width: 30%;
      margin-left: 50px;
    }
  }

  .year-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .year-content{
    /* padding: 20px 0;
    border-bottom: solid 1px var(--el-border-color);
    margin-bottom: 20px; */
  }
  .year-image{
    display: inline-block;
    /* width: 400px; */
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    /* vertical-align: top; */
    border: solid 1px var(--el-border-color);
    border-radius: 8px;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .year-h{
    display: flex;
    font-size: 14px;
    color: #333333;
    padding: 29px 0 23px;
  }
  .year-p{
    font-size: 20px;
    color: #094699;
    padding-bottom: 90px;
  }

}
</style>

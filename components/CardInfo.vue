<template>
  <div class="card-info">
    <div :class="{'card-box': true, 'bc-gray': isBgGray, 'active': isActive}">
      <slot />
      <p class="card-box__title">{{ title }}</p>
      <div class="card-box__date">
        <slot name="footer">
          <p>{{ date }}</p>
          <div class="read-more" v-if="isReadMore">
            <p>Read More</p>
            <el-icon><Right /></el-icon>
          </div>
        </slot>
      </div>
      <slot name="extraIntro"></slot>
    </div>
  </div>
</template>

<script lang='' setup>
import { Right } from '@element-plus/icons-vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Unclaimed Cargo Announcement Auction No. 88 /2025'
  },
  date: {
    type: String,
    default: '24.04.2025'
  },
  isBgGray: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isReadMore: {
    type: Boolean,
    default: true
  }
});

</script>

<style lang='scss' scoped>
  .card-info{

    .card-box{
    padding: 24px 22px 20px;
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid rgba(223,223,223,0.7);
    box-sizing: border-box;
    font-size: 20px;
    color: #333333;
    cursor: pointer;

    &.active{
      border: 2px solid rgba(23, 88, 182, 1);
      box-sizing: border-box;
    }
    &.bc-gray{
      background: rgba(13, 2, 43, 0.03);
      border: 0;

      &.active{
        background: rgba(240, 246, 253, 1);
        border: 2px solid rgba(23, 88, 182, 1);
        box-sizing: border-box;
      }
    }

    &__title{
      font-weight: 800;
      margin-bottom: 64px;
    }
    
    &__date{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      color: #999999;
    }

    .read-more{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3CC2EF;
      font-weight: 800;
      margin-top: 12px;
    }
  }
  }
</style>
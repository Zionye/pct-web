<template>
  <div class="photo-video-gallery">
    <div class="photo-video-gallery__btnbox">
      <el-button-group class="button-group">
        <el-button 
          v-for="item in buttons"
          :key="item.value"
          :class="{ 'is-active': activeBtnIndex === item.value }"
          @click="activeBtnIndex = item.value"
          >{{ item.label }}</el-button>
      </el-button-group>
    </div>

    <div class="photo-grid">
      <el-image
        v-for="(img, index) in srcList"
        :key="index"
        :src="img"  
        :preview-src-list="srcList"
        :initial-index="index" 
        fit="cover"
        class="photo-item"
        hide-on-click-modal 
      >
        <div v-if="index === srcList.length - 1" class="overlay-count">
          <span>+35</span>
        </div>

        <template #progress="{ activeIndex, total }">
          <div>

            <div class="text-center">
              <span>{{ activeIndex + 1 + '/' + total }}</span>
            </div>
    
            <div class="custom-preview-wrapper">
              <!-- 显示所有缩略图 -->
              <div class="thumbnail-list">
                <div
                  v-for="(item, index) in srcList"
                  :key="index"
                  class="thumbnail-item"
                  :class="{ 'active-thumbnail': index === activeIndex }"
                  @click="handleThumbnailClick(index)"
                >
                  <img :src="item" class="thumbnail-img" />
                </div>
              </div>
            </div>
          </div>
      </template>

      </el-image>
    </div>
  </div>
</template>

<script setup>
const activeBtnIndex = ref(1);
const buttons = [
  { value: 1, label: 'Photo' },
  { value: 2, label: 'Video' }
];

const url = ref('/images/photovideogallery/photo1.png');
const srcList = ref([
  '/images/photovideogallery/photo1.png',
  '/images/photovideogallery/photo2.png',
  '/images/photovideogallery/photo3.png',
  '/images/photovideogallery/photo4.png',
  '/images/photovideogallery/photo5.png',
  '/images/photovideogallery/photo6.png',
  '/images/photovideogallery/photo7.png',
  '/images/photovideogallery/photo8.png',
]);
// 点击缩略图切换当前预览图片
const handleThumbnailClick = (index) => {
  // 通过修改 url 触发预览切换（需配合 el-image 的预览逻辑）
  url.value = srcList.value[index];
};

</script>

<style lang="scss" scoped>
.photo-video-gallery{

  &__btnbox{
    width: 100%;
    padding: 0 250px;
    margin-bottom: 32px;

    .button-group{
      display: flex;
      width: 100%;

      .el-button {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;

        border-color: rgba(9, 70, 153, 0.02);
        /* background-color: #f5f5f5; */
        /* color: #333; */
        font-weight: normal;
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        &:hover, &:focus {
          border-color: rgba(9, 70, 153, 0.02) !important;
          background-color: #ffffff !important;
          color: #333333 !important;
        }


        &.is-active{
          font-size: 20px;
          color: #094699;
          border: 1px solid #094699 !important;
          background-color: white !important;
          z-index: 0;
        }
      }
    }
  }
  
  .photo-grid{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .photo-item{
      position: relative;
      width: calc((100% - 20px * 2) / 3);
      box-sizing: border-box;
      &:nth-last-child(-n+2) {
        width: calc((100% - 20px) / 2);
      }
      /* &:nth-last-child(1) {
      } */
    }
  }
  .overlay-count {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 60px;
    color: #FFFFFF;
    z-index: 1; /* 确保覆盖在图片上方 */
  }

  /* 缩略图列表 */
  .thumbnail-list {
    display: flex;
    gap: 10px;
  }
  /* 单个缩略图 */
  .thumbnail-item {
    width: 84px;
    height: 68px;
    border: 1px solid transparent;
    /* border-radius: 4px; */
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
  
    /* 高亮当前选中的缩略图 */
    &.active-thumbnail {
      border-color: #3CC2EF;
      /* transform: scale(1.05); */
    }
  }
  /* 缩略图图片 */
  .thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
<template>
  <div class="specifications">
    <div class="specifications__map">
      <div class="map-tab">
        <div class="tab-img img1"><img :src="specificationsTab1" alt=""></div>
        <div class="tab-img img2"><img :src="specificationsTab2" alt=""></div>
      </div>
      <div class="map-img"><img :src="specificationsMap" alt=""></div>
    </div>
   <div class="specifications__table">
    <div class="table-title"><img :src="specificationsTitle" alt=""></div>
    <div class="table-box">
      <div class="img-one-third"><img :src="specificationsTable" alt=""></div>
      <div class="img-two-thirds"><img :src="specificationsTable" alt=""></div>
    </div>
   </div>
  </div>
</template>

<script setup >
import specificationsTab1 from '~/assets/images/specifications-tab1.png';
import specificationsTab2 from '~/assets/images/specifications-tab2.png';
import specificationsMap from '~/assets/images/specifications-map.png';
import specificationsTitle from '~/assets/images/specifications-title.png';
import specificationsTable from '~/assets/images/specifications-table.png';

</script>

<style lang="scss" scoped>
.specifications{

  &__map{
    padding: 0px 120px 70px;
    .map-tab{
      @apply flex justify-between;
      margin-bottom: 40px;
    }
    .tab-img{
      height: 100%;

      &.img1{
        width: 354px;
      }
      &.img2{
        width: 332px;
      }
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .map-img{
      height: 700px;
      overflow: hidden;
      img{
        height: 100%;
        width: auto;
        min-width: 100%;
        display: block;
      }
    }
  }
  &__table{
    /* margin-bottom: 54px; */

    .table-title{
      padding: 0px 114px 22px;
      @apply flex justify-center;
    }
    .table-box{
      @apply flex justify-between;

      .img-one-third {
        flex: 1;  /* 占1份 */
      }
      .img-two-thirds {
        flex: 2;  /* 占2份 */
        margin-left: 40px;
        height: 336px;
        overflow: hidden;

        img{
          height: 100%;
          width: auto;
          min-width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>

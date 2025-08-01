<template>
  <div class="unclaimed-cargore-gulation">
    <div class="mb-[30px]">
      <p>
        Goods unloaded and received by the Piraeus Container Terminal S.A. in the context of its business activities, and placed in the storage areas it manages within the Piraeus Free Zone, where the owner or recipient of these goods has not appeared to take delivery of them within three (3) months of the date of unloading, or where no documentation has been lodged giving the goods a new customs destination and the storage fees have not been paid at the dates set by PCT S.A., or where the owner of the goods states in writing that he abandons them, are declared unclaimed by the Managing Director of PCT S.A., after the passage of a month from the date of written notification to the owner or recipient of the goods, or from the date of submission of the statement of their abandonment, and at the recommendation of the competent director of PCT S.A..
      </p>
      <p>
        Unclaimed goods are subject to the PCT Unclaimed Goods Regulation, available below:
      </p>
    </div>
    <div class="imgs-box flex flex-wrap">
      <div class="img-item">
        <img :src="bgGulation1" alt="">
      </div>
      <div class="img-item">
        <img :src="bgGulation2" alt="">
      </div>
    </div>
    <div class="zone-box">
      <p>PIRAEUS CONTAINER TERMINAL SINGLE MEMBER S.A. REGULATIONS FOR </p>
      <p>DECLARATION AND DISPOSAL OF UNCLAIMED GOODS AT THE PIRAEUS FREE ZONE</p>
    </div>
  </div>
</template>

<script setup >
import bgGulation1 from '~/assets/images/bg-gulation1.png';
import bgGulation2 from '~/assets/images/bg-gulation2.png';


</script>

<style lang="scss" scoped>
.unclaimed-cargore-gulation{
  color: #262729;
  font-size: 20px;

  .imgs-box{
    margin-bottom: 60px;
    padding: 0 10px;
    column-gap: 20px;
    .img-item{
      width: calc((100% - 20px) / 2);
      box-sizing: border-box;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .zone-box{
    font-weight: 500;
    color: #1758B6;
  }
}
</style>
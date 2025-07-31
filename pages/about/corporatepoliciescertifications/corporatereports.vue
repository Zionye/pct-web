<template>
  <div class="corporate-reports">
    <div>
      <div class="corporate-reports__header">
        <h4>Message from Captain Wang Jihang</h4>
      </div>
      <div>
        <div class="corporate-reports__content">
          <CardInfo isBgGray :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 8" :key="item" class="corporate-reports__card"/>
        </div>
      </div>
    </div>
    <div>
      <div class="corporate-reports__header">
        <h4>Information Security Policy</h4>
      </div>
      <div>
        <div class="corporate-reports__content">
          <CardInfo :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 8" :key="item" class="corporate-reports__card"/>
        </div>
      </div>
    </div>
    <div>
      <div class="corporate-reports__header">
        <h4>Business Continuity Policy</h4>
      </div>
      <div>
        <div class="corporate-reports__content">
          <CardInfo :title="'Unclaimed Cargo Announcement Auction No. 88 /2025'" :date="'24.04.2025'" v-for="item in 8" :key="item" class="corporate-reports__card"/>
        </div>
      </div>
    </div>

    </div>
</template>

<script setup >

</script>

<style lang="scss" scoped>
.corporate-reports{

  &__header {
    font-size: 30px;
    font-weight: 800;
    color: #333333;
    margin-bottom: 28px;
  }

  &__content{
    @apply flex flex-wrap;
    gap: 27px;
    /* margin-bottom: 60px; */
  }
  &__card{
    width: calc((100% - 27px * 3) / 4);
    box-sizing: border-box;
  }
}
</style>

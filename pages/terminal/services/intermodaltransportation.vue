<template>
  <div class="intermodal-transportation">
    <div class="intermodal-transportation__header">
      <h4>China-Europe Sea Land Express Routes</h4>
    </div>
    <div>
      <img :src="bgIntermodal" alt="">
    </div>
  </div>
</template>

<script setup >
import bgIntermodal from '~/assets/images/bg-intermodal.png';

</script>

<style lang="scss" scoped>
.intermodal-transportation{
  @apply flex flex-col items-center;

  &__header{
    font-weight: 800;
    font-size: 30px;
    color: #1758B6;
    margin-bottom: 40px;
  }
}
</style>
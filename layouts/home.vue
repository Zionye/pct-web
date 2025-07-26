<template>
  <div class="layout-home">
    <div class="layout-home__header">
      <TopSubTime />
      <TopSubMunes />
    </div>
    <slot />
  </div>
</template>

<script setup >

</script>

<style lang="scss" scoped>
.layout-home {
  height: 100vh;
}
</style>

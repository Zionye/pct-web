<template>
  <div class="layout-default">
    <div class="layout-default__header">
      <TopSubTime />
      <TopSubMunes />
    </div>

    <!-- <slot /> -->
     <el-container >
      <div class="nav-container">
        <!-- <div>面包屑</div> -->
        <AppBreadcrumb />
      </div>
      <div class="fill-height">
        <el-scrollbar view-class="content-view">
        <!-- <el-scrollbar view-class="content-view" height="400"> -->
          <el-main class="main">
            <!-- <router-view v-slot="{ Component }">
              <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view> -->
            <NuxtPage :transition="pageTransition" />
          </el-main>
        </el-scrollbar>
      </div>
    </el-container>
    
    <BottomFooder />
  </div>
</template>

<script setup >
const pageTransition = {
  name: 'fade',
  mode: 'out-in'
}
</script>

<style lang="scss" scoped>
.layout-default {
  height: 100vh;
  display: flex;
  flex-direction: column;

  > .el-container{
    display: flex;
    flex-direction: column;
  }

  .nav-container {
    position: sticky;
    z-index: 1;
    top: 0;
  }

  .fill-height {
    flex: 1;
    display: flex;
    height: 0; // 关键
    overflow: hidden;

    .el-scrollbar {
      flex: 1;
      height: 100%;

      .content-view {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }

      .main {
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;

        flex: 1;
        height: auto;
      }
    }
  }

  .footer-box{
    height: auto;
  }
}
</style>

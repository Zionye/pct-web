<template>
  <div class="breadcrumb">
    <!-- <el-breadcrumb separator=">"> -->
    <el-breadcrumb>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index">
        <template #separator>
          <el-icon><ArrowRightBold /></el-icon>
        </template>
        <!-- <nuxt-link v-if="index < breadcrumbItems.length - 1" :to="item.path">
          {{ item.title }}
        </nuxt-link> -->
        <span v-if="index < breadcrumbItems.length - 1" :to="item.path">
          {{ item.title }}
        </span>
        <span v-else class="current-page">
          {{ item.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { menuItems } = useNavigation();

// 递归查找匹配的面包屑项
const findBreadcrumbItems = (pathParts, menus, currentPath = '', breadcrumbs = []) => {
  if (pathParts.length === 0) return breadcrumbs;

  const [currentPart, ...remainingParts] = pathParts;
  const newPath = `${currentPath}/${currentPart}`.replace(/\/+/g, '/');

  // 查找匹配当前路径的菜单项
  const matchedMenu = menus.find(menu => {
    const menuPath = menu.path.startsWith('/') 
      ? menu.path 
      : `${currentPath}/${menu.path}`.replace(/\/+/g, '/');
    return menuPath === newPath;
  });

  if (matchedMenu) {
    const newBreadcrumbs = [
      ...breadcrumbs,
      {
        path: newPath,
        title: matchedMenu.seoMeta?.title || matchedMenu.name
      }
    ];

    // 如果有子菜单且还有剩余路径部分，继续递归查找
    if (remainingParts.length > 0 && matchedMenu.children) {
      return findBreadcrumbItems(
        remainingParts,
        matchedMenu.children,
        newPath,
        newBreadcrumbs
      );
    }
    return newBreadcrumbs;
  }

  return breadcrumbs;
};

// 生成面包屑数据
const breadcrumbItems = computed(() => {
  // 总是包含首页
  const items = [{
    path: '/',
    title: 'Home'
  }];

  // 分割当前路径
  const pathParts = route.path.split('/').filter(p => p);
  
  // 查找匹配的面包屑项
  const matchedItems = findBreadcrumbItems(pathParts, menuItems);

  // 合并首页和匹配的项
  return [...items, ...matchedItems];
});
console.log('面包屑 breadcrumbItems',breadcrumbItems);


// SSR支持
if (process.server) {
  breadcrumbItems.value = breadcrumbItems.value || [];
}
</script>

<style scoped>
.breadcrumb {
  background: #ffffff;

  .current-page {
    font-weight: bold;
    color: rgba(23, 88, 182, 1);
  }

  .el-breadcrumb{
    padding: 14px 100px;
    font-size: 14px;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
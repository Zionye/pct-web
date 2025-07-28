<template>
  <!-- 当前层级菜单项 -->
  <el-row :gutter="20" class="menu-item">
    <el-col class="mb-[7px]" :span="props.isChild? 24 : 12" v-for="item in menuData" :key="item.path">
      <!-- 无子菜单的普通项 -->
      <template v-if="!item.children?.length">
        <nuxt-link 
          :to="item.path" 
          class="menu-link"
          :class="{ 'active': isActive(item.path) }"
        >
          <el-icon v-if="item.seoMeta?.icon" class="i-img">
            <component :is="getIconComponent(item.seoMeta.icon)" />
          </el-icon>
          <span>{{ item.seoMeta?.title || "" }}</span>
        </nuxt-link>
      </template>

      <!-- 有子菜单的项 -->
      <template v-else>
        <div class="submenu-trigger" @click="toggleSubMenu(item.path)">
          <div class="flex items-center">
            <span>{{ item.seoMeta?.title || "" }}</span>
          </div>
        </div>

        <!-- 递归调用自身 -->
        <transition name="el-zoom-in-top">
          <!-- v-show="openedMenus.includes(item.path)"  -->
          <div 
            class="submenu-content"
          >
            <TopRecursiveMenu 
              :menuData="item.children" 
              :basePath="item.path"
              :isChild="true"
            />
          </div>
        </transition>
      </template>

    </el-col>
  </el-row>
</template>

<script setup lang="">
import { ArrowDown, CaretRight } from '@element-plus/icons-vue';

const  props = defineProps({
  menuData: {
    type: Array,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  },
  isChild: {
    type: Boolean,
    default: false
  }
})

// 创建icon图标映射方法
const getIconComponent = (iconName) => {
  const icons = {
    CaretRight: CaretRight,
  }
  return icons[iconName] || null
}

const menuData = computed(() => props.menuData);
console.log('menuData: 11', menuData);
const route = useRoute()
const openedMenus = ref([]);
// 检查当前路由是否激活
const isActive = (path) => {
  // const fullPath = props.basePath ? `${props.basePath}/${path}` : path
  // return route.path.startsWith(fullPath)
}
// 切换子菜单展开状态
const toggleSubMenu = (path) => {
  // const index = openedMenus.value.indexOf(path)
  // if (index > -1) {
  //   openedMenus.value.splice(index, 1)
  // } else {
  //   openedMenus.value.push(path)
  // }
}
</script>

<style lang="scss" scoped>
.menu-item{
   display: flex;
    flex-wrap: wrap;
    width: 100%;

    .menu-link {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      border-radius: 4px;
      color: #333;
      text-decoration: none;

      &:hover {
        color: rgba(23, 88, 182, 1);
        /* background-color: #f5f5f5; */
      }

      &.active {
        color: rgba(23, 88, 182, 1);
        /* background-color: #e6f7ff; */
      }

      .i-img {
        margin-right: 4px;
      }
    }

    .submenu-trigger {
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
    }

    .submenu-content {
      font-weight: 600;
      width: 100%;
    }
  }
/* .menu-item {
  @apply py-1;
}

.menu-link {
  @apply flex items-center px-3 py-2 rounded hover:bg-gray-100;
  &.active {
    @apply text-blue-600 bg-blue-50;
  }
}

.submenu-trigger {
  @apply flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100;
}

.submenu-content {
  @apply pl-4 border-l-2 border-gray-200;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.2s;
} */
</style>
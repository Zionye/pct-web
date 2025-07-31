<template>
  <div class="hear-wrap">
    <div class="header">
      <div>
        <img class="header-img" :src="logoh" />
      </div>
      <div class="header-search">

        <template v-for="menu in menuDate" :key="menu.name">
        <!-- 一级菜单下有子菜单 -->
          <el-popover
            v-if="menu?.children?.length"
            :popper-style="{width: 'auto',left: '120px',right: '120px', display: 'block'}"
            :show-arrow="false"
            placement="bottom"
            trigger="hover"
            :menuitem="menu"
            @show="handleShowMenu(menu)"
          >
            <template #reference>
              <!-- 一级菜单项 -->
              <div class="flex items-center justify-between mr-[27px]">
                <el-button link>{{ menu.seoMeta?.title || '' }}</el-button>
                <el-icon class="el-icon--right" v-if="menu.children">
                  <ArrowDown />
                </el-icon>
              </div>
            </template>
            <!-- 二级菜单项 -->
            <TopMenuItemModals v-if="menuModel" @closeMenuModel="closeMenuModel" :selectedMenu="selected"/>
          </el-popover>

          <!-- 一级菜单无子菜单，直接渲染链接 -->
          <div v-else class="flex items-center justify-between mr-[27px]">
            <nuxt-link
              :to="menu.path" 
              class="menu-link"
              :class="{ 'active': isActive(menu.path) }"
            >
              <el-button link>{{ menu.seoMeta?.title || '' }}</el-button>
            </nuxt-link>
          </div>
        </template>


        <div class="header-search—box">
          <img class="header-search—img" :src="search">
        </div>
    </div>
  </div>

  </div>
</template>

<script lang='' setup>
import logoh from '~/assets/images/logo-h.png';
import search from '~/assets/images/search.png';
import telInfo from '~/assets/images/tel-info.png';
import { ArrowDown } from '@element-plus/icons-vue';

// 导航菜单数据
const { menuItems } = useNavigation()
const menuDate = computed(() => {
  return menuItems.filter(item => item.name !== 'Home');
});
console.log('所有路由,除了Home. menuDate: ', menuDate.value);

// 当前选择
const selected = ref(null);
const menuModel = ref(false);
const handleShowMenu = (selMenu) => {
  console.log('show: ', selMenu);
  menuModel.value = true;
  selected.value = selMenu;
  console.log('menuModel.value: ', menuModel.value);
  console.log('所选一级路由 selected: ', selected);
}
// 监听 selected 的变化
watch(selected, (newVal) => {
  if (newVal) {
    console.log('newVal: ', newVal);
  }
})
const closeMenuModel = () => {
  menuModel.value = false;
}

// 检查当前路由是否激活
const isActive = (path) => {
  // const fullPath = props.basePath ? `${props.basePath}/${path}` : path
  // return route.path.startsWith(fullPath)
}
</script>

<style lang='scss' scoped>
 .hear-wrap{
  position: relative;
  .sub-menus{
    position: absolute;
    top: calc($top-submenus-height + 1px);
    left: 60px;
    right: 60px;
    /* width: 100%; */
    /* height: auto; */
    background-color: #ffffff;
    z-index: 10;
  }
 }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $top-submenus-height;
    padding: 0 80px;
    background: #ffffff;
    box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.06);
    &-img {
      cursor: pointer;
      flex-shrink: 0;
      width: 55px;
      height: 100%;
    }
    &-search {
    display: flex;
    align-items: center;
      &—box {
        border-radius: 50%;
        background: rgba(9, 70, 153, 0.10);
        padding: 5.5px;
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
      &—img {
        flex: 1;
        flex-shrink: 0;
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
<template>
  <div class="hear-wrap">
    <div class="header">
      <div>
        <img class="header-img" :src="logoh" />
      </div>
      <div class="header-search">

        <!-- <TopMenuItem  v-for="menu in menuDate" :key="menu.path" :menuitem="menu" @showMenu="handleShowMenu(menu)" @closeMenu="closeMenuModel"/> -->

        <!-- <el-menu
          :ellipsis="false"
          class="el-menu-popper-demo"
          mode="horizontal"
          :popper-offset="1"
          :ellipsis-limit="5"
        >
          <template v-for="menu in menuDate" :key="menu.path">
            <template v-if="menu.children">
              <el-sub-menu :index="menu.path" @open="handleShowMenu(menu)">
                <template #title>{{ menu.seoMeta?.title || '' }}</template>
                <el-menu-item index="2-1">
                  {{ menu.seoMeta?.title || '' }}
                  <div id="subMenuModals" class="sub-menus"></div>
                </el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :index="menu.path">
                {{ menu.seoMeta?.title || '' }}
              </el-menu-item>
            </template>
          </template>
        </el-menu> -->

    <!-- 预留 路由菜单 传送目标 -->
    <!-- <div id="subMenuModals" class="sub-menus"></div> -->
    
    <!-- 传送门路由菜单 -->
    <!-- <TopMenuItemModals v-if="menuModel" @closeMenuModel="closeMenuModel" :selectedMenu="selected"/> -->

    <el-popover
      :popper-style="{width: 'auto',left: '120px',right: '120px', display: 'block'}"
      :show-arrow="false"
      placement="bottom"
      trigger="hover"
      v-for="menu in menuDate" 
      :key="menu.path" 
      :menuitem="menu"
      @show="handleShowMenu(menu)"
    >
      <template #reference>
        <div class="flex items-center justify-between mr-[27px]">
          <el-button type="text">{{ menu.seoMeta?.title || '' }}</el-button>
          <el-icon class="el-icon--right" v-if="menu.children">
            <ArrowDown />
          </el-icon>
        </div>
      </template>
      <!-- 自定义内容 -->
      <TopMenuItemModals v-if="menuModel" @closeMenuModel="closeMenuModel" :selectedMenu="selected"/>
    </el-popover>

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
const { menuItems, findRouteInfo, } = useNavigation()
const menuDate = computed(() => {
  return menuItems.filter(item => item.name !== 'Home');
});
console.log('menuDate: ', menuDate);

// 当前选择
const selected = ref(null);
const menuModel = ref(false);
const handleShowMenu = (selMenu) => {
  console.log('show: ', selMenu);
  menuModel.value = true;
  selected.value = selMenu;
  console.log('menuModel.value: ', menuModel.value);
  console.log('selected: ', selected);
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
    padding: 0 40px;
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
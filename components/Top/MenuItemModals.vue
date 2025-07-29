<template>
    <transition name="fade-transform" mode="out-in">
      <div class="menu-modal">
        <div class="menu-modal__content">
          <img :src="bgmenu" alt="">

          <div class="menu-modal__main">
            <!-- {{ selectedMenu.seoMeta?.title || '' }} -->

            <!-- 当前层级(二级)菜单项 -->
             <TopRecursiveMenu :menuData="menuData" :basePath="props.selectedMenu.path"/>
          </div>
        </div>

      </div>
    </transition>
</template>

<script lang='' setup>
import bgmenu from '~/assets/images/bg-menu.png';

const props = defineProps({
  selectedMenu: {
    type: Object,
    default: () => ({})
  }
});
console.log('所选一级路由 selectedMenu: ', props.selectedMenu);
const isClient = process.client;

const menuData = computed(() => {
  return props.selectedMenu.children || [];
});

const emit = defineEmits(['closeMenuModel']);
const close = () => {
  emit('closeMenuModel');
};


// // 切换子菜单展开状态
// const toggleSubMenu = (path: string) => {
//   const index = openedMenus.value.indexOf(path)
//   if (index > -1) {
//     openedMenus.value.splice(index, 1)
//   } else {
//     openedMenus.value.push(path)
//   }
// }
// const selectedMene = ref('Media Center');
// const emit = defineEmits(['update:modelValue']);

// const handleCommand = (command) => {
//   console.log('data: ', command);
//   selectedMene.value = `选项 ${command.label}`
//   emit('update:modelValue', command.value) // 向父组件传值
// }
</script>

<style lang='scss' scoped>
.menu-modal__content {
  display: flex;
  box-shadow: 0px 5px 14px 4px rgba(0,0,0,0.05), 0px 3px 8px 0px rgba(0,0,0,0.08), 0px 2px 3px -2px rgba(0,0,0,0.12);

  img{
    height: 100%;
  }

  .menu-modal__main{
    padding: 25px 50px;
    flex: 1;
  }
}
</style>
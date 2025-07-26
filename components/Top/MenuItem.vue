<template>
  <div class="menuitem">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ selectedMene }}
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="{ value: 'A', label: '选项 A' }">PCT Media Kit</el-dropdown-item>
          <el-dropdown-item :command="{ value: 'B', label: '选项 B' }">PCT Media Kit</el-dropdown-item>
          <el-dropdown-item :command="{ value: 'C', label: '选项 C' }">PCT Media Kit</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="" setup>
import { ArrowDown } from '@element-plus/icons-vue';

const selectedMene = ref('Media Center');
const emit = defineEmits(['update:modelValue']);

const handleCommand = (command) => {
  console.log('data: ', command);
  selectedMene.value = `选项 ${command.label}`
  emit('update:modelValue', command.value) // 向父组件传值

}
</script>

<style lang="scss" scoped>
 .menuitem{
    display: flex;
    align-items: center;
    
    .el-dropdown{
      margin-right: 27px;
    }
 }
</style>
<template>
  <div class="working">
    <div class="search-form">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Search">
          <el-input v-model="formInline.searchKey" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">VIEW</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">RESET</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pct-table">
      <el-table
         :data="tableData"
         style="width: 100%; margin-bottom: 20px"
         row-key="id"
         border
         class="custom-table"
       >
         <el-table-column prop="vasselName" label="Vassel Name" sortable />
         <el-table-column prop="vslcd" label="Vsl cd" sortable />
         <el-table-column prop="callYear" label="Call Year" sortable />
         <el-table-column prop="vasselOperator" label="Vassel Operator" sortable />
         <el-table-column prop="inVoyage" label="In Voyage" sortable />
         <el-table-column prop="outVoyage" label="Out Voyage" sortable />
         <el-table-column prop="eta" label="eta" sortable />
         <el-table-column prop="etd" label="etd" sortable />
         <el-table-column prop="ata" label="ata" sortable />
         <el-table-column prop="atd" label="atd" sortable />
         <el-table-column prop="estMoves" label="est_Moves" sortable />
       </el-table>
    </div>
  </div>
</template>

<script setup >
const tableData = [
  {
    id: 1,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 2,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 3,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 4,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 5,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 6,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 7,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 8,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 9,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
  {
    id: 10,
    vasselName: 'ADMLRAL NEPTUNE',
    vslcd: 'ADNE',
    callYear: '2025',
    vasselOperator: 'ADMLRAL',
    inVoyage: '24-321',
    outVoyage: '24-321',
    eta: '18/04/2025 11:05',
    etd: '18/04/2025 11:05',
    ata: '18/04/2025 11:05',
    atd: '18/04/2025 11:05',
    estMoves: '348',
  },
]

const formInline = reactive({
  searchKey: '',
})

const onSubmit = () => {
}
</script>

<style lang="scss" scoped>
.working {
  /* padding-bottom: 54px; */

  .search-form{
    @apply flex justify-end;
  }

  .el-button--primary{
    background: #1758B6;
    border-radius: 5px;
  }
  .el-form--inline .el-form-item{
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>

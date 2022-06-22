<template>
  <layout-content header="复合表格">
    <complex-table :columns="columns" :data="data" >
      <template #toolbar>
        <el-button @click="create">创建</el-button>
        <el-button>删除</el-button>
      </template>
      <el-table-column type="selection" fix />
      <el-table-column label="ID" min-width="100" prop="id" fix />
      <el-table-column label="Email" min-width="100" prop="email" />
      <el-table-column label="角色" min-width="100" prop="roles" />
      <fu-table-operations :buttons="buttons" label="操作" fix />
      <template #buttons>
        <fu-table-column-select type="button" :columns="columns" size="small" />
      </template>
    </complex-table>
  </layout-content>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from "vue-router";
import ComplexTable from "@/components/complex-table/index.vue";
import LayoutContent from "@/components/layout/LayoutContent.vue";
import { listUsers } from "@/api/user-management"

import { hasPermissions } from "@/utils/permisstion"

const router = useRouter()

const buttonClick = function (row) {
  console.log(this.label + ": " + row.id)
}

const columns = ref([])
const paginationConfig = reactive({
  currentPage: 1,
  pageSize: 5,
  total: 0,
});
const data = ref([])


const buttons = [
  {
    label: "编辑", click: edit
  }, {
    label: "执行", click: buttonClick
  }, {
    label: "删除", type: "danger", click: buttonClick
  }, {
    label: "删除(权限)", type: "danger", click: buttonClick,
    show: hasPermissions('admin') // 必须有admin权限才能看到
  }, {
    label: "复制", click: buttonClick
  }, {
    label: "定时任务", click: buttonClick
  }
]

const searchConfig = reactive({
  quickPlaceholder: "按 姓名/邮箱 搜索",
  components: [
    {
      field: "groups",
      label: "区域",
      component: "FuFilterSelect",
      options: [{ label: "北区", value: "1" }, { label: "南区", value: "2" }, { label: "东区", value: "3" }],
      multiple: true,
      clearable: true,
      filterable: true
    },
    {
      field: "date",
      label: "操作日期",
      component: "FuFilterDate"
    }
  ]
});


function create() {
  router.push({ name: "CreateFormDemo" })
}
function select(selection) {
  console.log(selection)
}
function edit(row) {
  console.log("编辑: ", row)
}
function search(condition) {
  console.log(condition) // demo只查看搜索条件，没有搜索的实现
  const { currentPage, pageSize } = paginationConfig
  listUsers(currentPage, pageSize).then(response => {
    data.value = response.data.items
    paginationConfig.total = response.data.total
  })
}
onMounted(() => {
  search()
})
</script>

<style scoped>
</style>

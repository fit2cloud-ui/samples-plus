<template>
  <layout-content>
    <template #header>
      详情页
    </template>
    <template #toolbar>
      <el-button @click="back">返回</el-button>
    </template>
  </layout-content>
</template>

<script setup>
import { useRouter } from "vue-router";
import LayoutContent from "@/components/layout/LayoutContent.vue";
const router = useRouter()

function back() {
 router.push({ name: "RouterMenu" })
}
</script>

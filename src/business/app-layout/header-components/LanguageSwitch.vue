<template>
  <el-menu :default-active="language" class="header-menu" text-color="inherit" mode="horizontal" :ellipsis="false">
    <el-sub-menu index="none" popper-class="header-menu-popper">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>{{ languageMap[language] }}</span>
      </template>
      <el-menu-item v-for="(value, key) in languageMap" :key="key" :index="key" @click="setLanguage(key)">
        <span>{{ value }}</span>
        <i class="el-icon-check" v-if="key === language" />
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import useStore from "@/store";
const languageMap = {
  "zh-cn": "中文(简体)",
  "zh-tw": "中文(繁體)",
  "en": "English",
}

const { user } = useStore();
const language = computed(() => user.language);

function setLanguage(lang) {
  user.userSetLanguage(lang).then(() => {
    return
    // do something
  })
}
</script>

<style lang="scss">
@use "@/styles/business/header-menu.scss";

.header-menu-popper {
  .el-icon-check {
    margin-left: 10px;
    color: var(--el-color-primary);
  }
}
</style>

<template>
  <el-menu class="header-menu" text-color="inherit" mode="horizontal" :ellipsis="false">
    <el-sub-menu index="none" popper-class="header-menu-popper">
      <template #title>{{ name }}</template>
      <el-menu-item @click="toPersonal" index="personal">
        <span>{{ $t('commons.personal.personal_information') }}</span>
      </el-menu-item>
      <el-menu-item @click="toHelp" index="help">
        <span>{{ $t('commons.personal.help_documentation') }}</span>
      </el-menu-item>
      <el-menu-item @click="logout" index="exit">
        <span>{{ $t('commons.personal.exit_system') }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import useStore from "@/store";
const { user } = useStore();
const name = computed(() => user.name);

function toPersonal() {
  return
}
function toHelp() {
  window.open("https://github.com/fit2cloud-ui/samples-plus", "_blank");
}
function logout() {
  user.userLogout().then(() => {
    location.reload()
  })
}


</script>

<style lang="scss">
@use "@/styles/business/header-menu.scss";
</style>

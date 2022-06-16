<template>
  <el-menu class="header-menu" text-color="inherit" mode="horizontal">
    <el-sub-menu index="none" popper-class="header-menu-popper">
      <template #title>
        <span>{{ name }}</span>
      </template>
      <el-menu-item @click="toPersonal">
        <span>{{ $t('commons.personal.personal_information') }}</span>
      </el-menu-item>
      <el-menu-item @click="toHelp">
        <span>{{ $t('commons.personal.help_documentation') }}</span>
      </el-menu-item>
      <el-menu-item @click="logout">
        <span>{{ $t('commons.personal.exit_system') }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
// import {mapGetters} from "vuex";

// export default {
//   name: "PersonalSetting",
//   computed: {
//     ...mapGetters([
//       'name'
//     ])
//   },
//   methods: {
//     toPersonal() {

//     },
//     toHelp() {
//       window.open("https://github.com/fit2cloud-ui/samples-plus", "_blank");
//     },
//     logout() {
//       this.$store.dispatch("user/logout").then(() => {
//         location.reload()
//       })
//     }
//   }
// }
</script>

<style lang="scss">
@use "~@/styles/business/header-menu.scss";
</style>

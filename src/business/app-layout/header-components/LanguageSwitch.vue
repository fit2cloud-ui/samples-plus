<template>
  <el-menu :unique-opened="true"
           :default-active="language"
           class="header-menu"
           text-color="inherit"
           mode="horizontal">
    <el-sub-menu index="1" popper-class="header-menu-popper">
      <template #title>
        <font-awesome-icon class="language-icon" :icon="['fas', 'globe']"/>
        <span>{{ languageMap[language] }}</span>
      </template>
      <el-menu-item v-for="(value, key) in languageMap" :key="key" :index="key" @click="setLanguage(key)">
        <span>{{ value }}</span>
        <i class="el-icon-check" v-if="key === language"/>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
// import { computed } from 'vue';
const  languageMap ={
        "zh-cn": "中文(简体)",
        "zh-tw": "中文(繁體)",
        "en-US": "English",
      }

  // computed: {
  //   language() {
  //     return this.$store.getters.language
  //   }
  // },

function setLanguage(lang) {
      this.$store.dispatch('user/setLanguage', lang).then(() => {
        // do something
      })
    }
</script>

<style lang="scss">
@use "~@/styles/business/header-menu.scss";

.header-menu {
  .language-icon {
    width: 24px;
  }
}

.header-menu-popper {
  .el-icon-check {
    margin-left: 10px;
    color: var(--el-color-primary);
  }
}
</style>

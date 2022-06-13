<template>
  <div class="horizontal-header">
    <div class="header-left">
      <sidebar-toggle-button/>
    </div>
    <div class="header-right">
      <!-- <div class="navbar-item">
        <language-switch/>
      </div> -->
      <!-- <div class="navbar-item">
        <personal-setting/>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import SidebarToggleButton from "@/components/layout/sidebar/SidebarToggleButton.vue";
// import LanguageSwitch from "@/business/app-layout/header-components/LanguageSwitch.vue";
// import PersonalSetting from "@/business/app-layout/header-components/PersonalSetting.vue";

</script>

<style lang="scss" scoped>
@use "@/styles/common/mixins.scss" as *;

.horizontal-header {
  @include flex-row(flex-start, center);
  position: relative;
  height: 100%;

  // 先去掉横线看看
  //&:after {
  //  content: "";
  //  position: absolute;
  //  bottom: 0;
  //  left: 0;
  //  height: 1px;
  //  width: 100%;
  //  background-color: #D5D5D5;
  //}

  .header-left {
    @include flex-row(flex-start, center);
    position: relative;
    height: 100%;
  }

  .header-right {
    @include flex-row(flex-end, center);
    flex: auto;
    height: 100%;

    .navbar-item {
      color: #2E2E2E;
    }

    .navbar-item + .navbar-item {
      margin-left: 20px;
    }
  }
}
</style>

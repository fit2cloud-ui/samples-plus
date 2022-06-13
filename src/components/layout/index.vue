<template>
  <el-container class="layout-container">
    <slot>
      <layout-sidebar/>
      <layout-main>
        <layout-header>
          <slot name="header"></slot>
        </layout-header>
        <layout-view/>
      </layout-main>
    </slot>
  </el-container>
</template>

<script setup>
import LayoutSidebar from "./LayoutSidebar.vue";
import LayoutMain from "./LayoutMain.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutView from "./LayoutView.vue";
</script>

<style lang="scss">
@use "@/styles/common/variables.scss" as *;

.layout-container {
  min-width: 1024px;
  height: 100%;
  background-color: $layout-bg-color;
}

.main-container {
  position: relative;
}

.sidebar-container {
  position: relative;
  transition: width 0.28s;
  width: $sidebar-open-width;
  min-width: $sidebar-open-width;
  background-color: $sidebar-bg-color;
  background-image: $sidebar-bg-gradient;

  &.is-collapse {
    width: $sidebar-close-width;
    min-width: $sidebar-close-width;
  }
}

.header-container {
  height: $header-height;
  padding: 0 $header-padding;
}

.view-container {
  display: block;
  flex: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 0 $view-padding $view-padding;
}
</style>

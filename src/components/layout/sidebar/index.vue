<template>
  <div class="sidebar">
    <logo :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :collapse-transition="false" :unique-opened="false"
               mode="vertical">
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';

import SidebarItem from './SidebarItem.vue'
import logo from '@/components/layout/sidebar/SidebarLogo.vue';
import useStore from '@/store';

const {permission, app} = useStore();

const route = useRoute();
const permission_routes = computed(() => permission.routes);
const sidebar = computed(() => app.sidebar);

const activeMenu = computed(() => {
  const {meta, path} = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
});

const isCollapse = computed(() => {
  return !sidebar.value.opened
});

</script>

<style lang="scss">
@use "@/styles/common/variables.scss" as *;

@mixin sidebar-base-item {
  & {
    border-radius: 2px;
    color: $menu-color;
  }
}

@mixin menu-item {
  & {
    line-height: $menu-height;
    height: $menu-height;
  }
  @include sidebar-base-item;
}

@mixin submenu-item {
  & {
    line-height: $submenu-height;
    height: $submenu-height;
  }
  @include sidebar-base-item;
}

@mixin popper-submenu-item {
  & {
    line-height: $submenu-height;
    height: $submenu-height;
  }
  @include sidebar-base-item;
}

@mixin menu-item-active {
  font-weight: 600;
  color: $menu-active-color;
  background-color: $menu-active-bg-color;

  &:hover {
    background-color: $menu-bg-color-hover;
  }
}

@mixin submenu-item-active {
  font-weight: 600;
  color: $submenu-active-color;
  background-color: $submenu-active-bg-color;

  &:hover {
    background-color: $submenu-bg-color-hover;
  }
}

@mixin menu-active-prefix {
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    bottom: 1px;
    width: $menu-active-prefix-width;
    background-color: $menu-active-prefix-color;
  }
}

.sidebar {
  height: 100%;

  .el-scrollbar {
    box-sizing: border-box;
    padding: 10px 0;
    height: calc(100% - #{$header-height});

    .el-scrollbar__bar {
      &.is-vertical {
        right: 0;
      }

      &.is-horizontal {
        display: none;
      }
    }

    .scrollbar-wrapper {
      height: 100%;
      overflow-x: hidden;
    }
  }

  a {
    width: 100%;
    overflow: hidden;
  }

  .is-opened {
    .el-menu {
      background-color: $menu-open-bg-color;
    }
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100%;
    background-color: $menu-bg-color;

    .submenu-title-no-dropdown {
      @include menu-item;

      &:hover {
        background-color: $menu-bg-color-hover;
      }

      &.is-active {
        @include menu-item-active;
        @include menu-active-prefix;
      }
    }

    .el-sub-menu {
      .el-sub-menu__title {
        @include menu-item;

        &:hover {
          background-color: $menu-bg-color-hover;
        }
      }

      &.is-active {
        &:not(.is-opened) {
          .el-sub-menu__title {
            @include menu-active-prefix;
          }
        }

        .el-sub-menu__title {
          @include menu-item-active;

          .sub-el-icon,
          span {
            color: #FFF;
          }
        }
      }

      .el-menu-item {
        padding-left: 54px !important;
        @include submenu-item;

        &:hover {
          background-color: $submenu-bg-color-hover;
        }

        &:focus {
          background: none
        }

        &.is-active {
          @include submenu-item-active;
          @include menu-active-prefix;
        }
      }
    }

    .nest-menu,
    .el-sub-menu__title,
    .submenu-title-no-dropdown {
      span {
        padding-left: 30px;
      }

      .sub-el-icon {
        margin-right: 10px;

        + span {
          padding-left: 0;
        }
      }
    }

    &.el-menu--collapse {
      .el-tooltip {
        padding: 0 !important;
        text-align: center;
        line-height: $menu-height;
      }

      .el-sub-menu__title {
        padding-left: 20px !important;
      }

      .submenu-title-no-dropdown,
      .el-sub-menu__title {
        max-width: 60px;
        text-align: center;

        span {
          display: none;
        }

        .sub-el-icon {
          margin: 0;
        }

        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
  }
}

.sidebar-popper {
  .el-menu--popup {
    padding: 0;
  }

  & > .el-menu {
    display: block;
    background-color: $sidebar-bg-color;

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }
  }

  .nest-menu .el-sub-menu > .el-sub-menu__title,
  .el-menu-item {
    &.is-active {
      color: $submenu-active-color;
      @include menu-active-prefix;
    }

    @include popper-submenu-item;

    span {
      padding-left: 30px;
    }

    .sub-el-icon {
      margin-right: 10px;

      + span {
        padding-left: 0;
      }
    }

    &:hover {
      background-color: $submenu-bg-color-hover;
    }
  }

  .el-menu--popup {
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
}
</style>

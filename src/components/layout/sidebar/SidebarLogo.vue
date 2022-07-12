<template>
  <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
    <transition name="sidebar-logo-fade" mode="out-in">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="collapseLogo" :src="collapseLogo" class="sidebar-logo" alt="Sidebar Logo">
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" alt="Sidebar Logo">
      </router-link>
    </transition>
  </div>
</template>

<script setup>
import logo from "@/assets/RackShift-white.png"
import collapseLogo from "@/assets/RackShift-assist-white.png"
defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
});

// const title = "FIT2CLOUD"

</script>

<style lang="scss">
@use "sass:math";
@use "@/styles/common/variables.scss" as *;

.sidebar-logo-container {
  position: relative;
  height: $header-height;
  line-height: $header-height;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: math.div($sidebar-close-width, 4);
    height: 1px;
    width: calc(100% - math.div($sidebar-close-width, 2));
    background-color: hsla(0, 0%, 100%, .5);
  }

  .sidebar-logo-link {
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;

    .sidebar-logo {
      height: $logo-height;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo-link {
      padding: 0 10px;
    }

    .sidebar-logo {
      margin: auto;
    }
  }
}

.sidebar-logo-fade-enter-active {
  transition: opacity 0.1s;
  transition-delay: 0.1s;
}

.sidebar-logo-fade-leave-active {
  opacity: 0;
}

.sidebar-logo-fade-enter-from,
.sidebar-logo-fade-leave-to {
  opacity: 0;
}
</style>

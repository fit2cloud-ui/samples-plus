<template>
  <aside :class="['sidebar-container', {'is-collapse': isCollapse}]">
    <slot>
      <sidebar/>
    </slot>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import Sidebar from "@/components/layout/sidebar/index.vue";

import useStore from '@/store';

const { app } = useStore();
const sidebar = computed(() => app.sidebar);

const isCollapse = computed(() => {
  return !sidebar.value.opened
});

</script>

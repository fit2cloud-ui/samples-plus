<template>
  <main class="view-container">
    <router-view v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

  </main>
</template>

<script setup>
import { ref, onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cachedViews = ref([])

onBeforeUpdate(() => {
  let isCached = route.meta?.cache
  let name = route.name
  if (isCached && name && !cachedViews.value.includes(name)) {
    cachedViews.value.push(name)
  }
});

</script>

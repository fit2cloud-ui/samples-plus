<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-no-dropdown': !isNest }"
        >
          <el-icon
            v-if="onlyOneChild.meta && onlyOneChild.meta.icon"
            class="sub-el-icon"
          >
            <component
              :is="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            />
          </el-icon>
          <template #title>{{ $tk(onlyOneChild.meta.title) }}</template>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
      popper-class="sidebar-popper"
    >
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon" class="sub-el-icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span v-if="item.meta && item.meta.title">{{
          $tk(item.meta.title)
        }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import path from "path-browserify";
import { isExternals } from "@/utils/validate";
import { $tk } from "@/utils/i18n";
import AppLink from "./Link.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
});

const onlyOneChild = ref(null);

function hasOneShowingChild(children = [], parent) {
  const showingChildren = children.filter((item) => {
    if (item?.meta?.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true;
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
    return true;
  }

  return false;
}
function resolvePath(routePath) {
  if (isExternals(routePath)) {
    return routePath;
  }
  if (isExternals(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
}
</script>
<style scoped>
.sub-el-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
}
</style>

<template>
  <div class="form-part">
    <h3 class="form-part__header" v-if="$slots.header || header" @click="show = !show">
      <slot name="header">{{ header }}</slot>
    </h3>
    <el-collapse-transition>
      <div class="form-part__body" v-show="show">
        <slot></slot>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  header: String
});
const show = ref(true)

</script>

<style lang="scss">
.form-part {
  padding: 10px;

  &+&:before {
    content: "";
    display: block;
    width: 100%;
    margin: 20px 0;
    border-top: 1px dashed var(--el-border-color);
  }

  .form-part__header {
    position: relative;
    line-height: 2;
    font-size: 16px;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      left: -10px;
      top: 4px;
      bottom: 4px;
      border-radius: var(--el-border-radius-base);
      border-left: 4px solid var(--el-color-primary)
    }
  }

  .form-part__body {
    padding: 10px 0;
  }
}
</style>

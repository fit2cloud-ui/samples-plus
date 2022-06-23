<template>
  <!-- "['label-value', 'label-value--' + computeSize]" -->
  <div class="label-value">
    <label :style="{ width: width }" v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const prop = defineProps({
  label: String,
  labelWidth: String,
});

const itemLabelWidth = inject('itemLabelWidth')
const width = computed(() => {
  return prop.labelWidth || itemLabelWidth
})

</script>

<style lang="scss">
.label-value {
  display: flex;
  justify-content: flex-start;
  line-height: 2;

  // .label-value--medium {
  //   font-size: 14px;
  // }

  // .label-value--small {
  //   font-size: 13px;
  // }

  // .label-value--mini {
  //   font-size: 12px;
  // }

  label {
    flex: 0 0 auto;
    text-align: left;
    font-weight: 700;
    margin-right: 20px;
  }
}
</style>

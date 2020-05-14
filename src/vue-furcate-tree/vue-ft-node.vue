<template>
  <div class="vue-ftree-node-wrapper">
    <div
      v-for="item in nodeData"
      :key="item.id"
      class="vue-ftree-node"
      :class="{'has-children': item.children && item.children.length > 0}"
    >
      <div class="vue-ftree-node-content">
        <div class="vue-ftree-node-content-inner">
          {{ item.label }}
        </div>
        <div
          v-if="item.children && item.children.length > 0"
          class="vue-ftree-children"
        >
          <vue-ft-node :node-data="item.children" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueFtNode',
  props: {
    nodeData: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

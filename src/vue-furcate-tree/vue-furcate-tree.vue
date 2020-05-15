<template>
  <div class="vue-ftree-wrapper">
    <vueFtNode 
      :ft-data="ftData" 
      :render-func="renderFunc"
      :expandable="expandable"
      :expand-all="expandAllCopy"
      @click="$listeners.click"
      @expand="$listeners.expand"
    >
      <slot />
    </vueFtNode>
  </div>
</template>

<script>
import render from './render'

export default {
  name: 'VueFurcateTree',
  props: {
    ftData: {
      type: Array,
      default: () => [],
      required: true
    },
    expandable: {
      type: Boolean,
      default: () => true,
      required: false
    },
    expandAll: {
      type: Boolean,
      default: () => false,
      required: false
    },
    renderFunc: {
      type: Function,
      required: false
    }
  },
  components: {
    vueFtNode: {
      functional: true,
      props: this.props,
      render
    }
  },
  data() {
    return {
      expandAllCopy: this.expandAll
    }
  },
  watch: {
    expandAll() {
      this.expandAllCopy = this.expandAll
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import '../assets/style.scss'
</style>

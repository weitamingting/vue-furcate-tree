<template>
  <div class="vue-ftree-wrapper">
    <vueFtNode 
      :node-data="ftData" 
      :render-func="renderFunc"
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
    renderFunc: {
      type: Function
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

    }
  }
}
</script>

<style lang="scss">

</style>

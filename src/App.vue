<template>
  <div id="app">
    <VueFurcateTree 
      :ft-data="ftData" 
      :render-func="renderDom" 
      @click="click"
      @expand="expand"
    >
      我是#{label}
      <em>#{test.a}</em>
    </VueFurcateTree>
  </div>
</template>

<script>
import VueFurcateTree from './vue-furcate-tree/vue-furcate-tree'
export default {
  name: 'app',
  components: {
    VueFurcateTree
  },
  data () {
    return {
      ftData: [
        {
          id: 0,
          label: '节点1',
          test: {
            a: 'b'
          },
          expand: true,
          children: [
            {
              id: 1,
              label: '节点2',
              test: {
                a: 'b'
              },
              expand: false,
              children: [
                {
                  id: 3,
                  label: '节点3',
                  test: {
                    a: '出'
                  }
                },
                {
                  id: 4,
                  label: '节点3',
                  test: {
                    a: '出'
                  }
                },
                {
                  id: 5,
                  label: '节点3',
                  test: {
                    a: '出'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    renderDom(nodeData) {
      return nodeData.label
    },
    click(nodeData, event) {
    },
    expand(data){
      console.log(data)
    }
  }
}
</script>

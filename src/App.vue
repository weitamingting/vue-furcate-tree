<template>
  <div id="app">
    <button class="expand-all" @click="expandAllMethod()">全部展开</button>
    <VueFurcateTree 
      :ft-data="ftData" 
      :expandable="true"
      :expand-all="expandAllStatus"
      @click="click"
      @expand="expand"
    >
      <div>我是#{label}</div>
      <em>#{label}的test.a属性：#{test.a}</em>
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
      expandAllStatus: true,
      collapseAllStatus: false,
      ftData: [
        {
          label: '节点1',
          test: {
            a: 'a'
          },
          expand: true,
          children: [
            {
              label: '节点2',
              test: {
                a: 'b'
              },
              expand: false,
              children: [
                {
                  label: '节点3',
                  expand: false,
                  test: {
                    a: 'c'
                  }
                },
                {
                  label: '节点3',
                  expand: false,
                  test: {
                    a: 'd'
                  }
                },
                {
                  label: '节点3',
                  expand: false,
                  test: {
                    a: 'e'
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
    expandAllMethod(){
      this.expandAllStatus = !this.expandAllStatus
    },
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

<style>
  .expand-all{
    display: block;
    padding: 10px 30px;
    color: #ffffff;
    background-color: #ff9900;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(255, 153, 0, .6);
    margin: 20px auto;
  }
</style>
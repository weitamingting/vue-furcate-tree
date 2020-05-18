# vue-furcate-tree
vue分叉树、组织架构图组件，支持使用模板语法来定义每个节点内容

[效果演示](https://weitamingting.github.io/vue-furcate-tree/ "效果演示")

## 使用
```sh
npm install --save vue-furcate-tree
```

```html
<template>
  <div id="app">
    <VueFurcateTree 
      :ft-data="ftData" 
      :expandable="true"
      :expand-all="expandAllStatus"
      @click="click"
      @expand="expand"
    >
      我是#{label}
      <em>#{test.a}</em>
    </VueFurcateTree>
  </div>
</template>

<script>
  import VueFurcateTree from 'vue-furcate-tree'
  components: {
    VueFurcateTree
  },
  data() {
    return {
      ftData: [...]
    }
  }
  ...
</script>
```
### ftData格式
```js
[
    {
        expand: true,   // 必须的，表示子级节点是否展开
        label: '节点1', // 你的自定义属性，将来可在模板中作为变量
        test: {         // 你的自定义属性
            a: 'b'      // 你的自定义属性，可以在模板中使用test.a方式访问变量
        },
        children: [     // 可选的，子级节点数组
          {
            expand: false,
            label: '节点2',
            test: {
              a: 'b'
            },
            children: [
              {
                expand: false,
                label: '节点3',
                test: {
                    a: 'c'
                }
              },
              {
                expand: false,
                label: '节点3',
                test: {
                    a: 'd'
                }
              }
            ]
          }
        ]
    }
]

```

## 模板方式渲染节点
组件将插槽改造为节点渲染模板，可以使用HTML语法更加方便地修改节点内容。在模板中使用形式如`#{prop}`的标签访问ftData中定义的节点属性

例如你的某个节点数据是这样
```js
{
  label: '节点1',
  test: {
      a: 'b'
  },
  children: [...]
}
```
那么在组件插槽中这样使用就可以访问到节点属性
```js
<VueFurcateTree>
    <div>
        我是label属性：#{label}
        我是test，我可以使用点号继续向下访问属性：#{test.a}
    </div>
</VueFurcateTree>
```

这样，对于上述这个节点最后就被渲染成了

```html
<div>
    我是label属性：节点1
    我是test，我可以使用点号继续向下访问属性：b
</div>
```

### 请注意：当属性中声明了`renderFunc`，也就是使用了函数式渲染方式时，模板编译就会失效

## 属性
| 属性名称 | 类型 | 说明 |
| ---------- | ---------- | ----------- |
| `ftData` | `Array` | 一个有父子级关系的节点对象数组，每个节点对象必须有属性`expand`，具体上方用法注释 |
| `expandable` | `Boolean` | 是否允许点击节点展开/收缩子级节点 |
| `expandAll` | `Boolean` | 是否展开/收缩全部节点，`true`为展开全部，`false`为收缩全部 |
| `renderFunc` | `Function` | 函数式渲染节点方法，返回值为字符串，字符串中可以包含html标签，此处本质是dom.innerHTML，参数为当前节点的数据对象。更灵活，但更复杂。`注意：如果有了此属性，模板编译方式会失效` |

`renderFunc`示例，`nodeData`参数为每个节点的数据对象
```js
    renderFunc(nodeData) {
      return nodeData.label
    }
```

## 事件

| 事件名称 | 参数 | 说明 |
| ---------- | ----------- | ----------- |
| click | `nodeData {Object}`, `event` | 每个节点的点击事件，`nodeData`：当前点击的节点数据, `event`：事件对象 |
| expand | `data {Object}` | 展开/收缩时触发，参数`data`有两个属性，`nodeData`：当前点击的节点数据，`expanded`：展开状态还是收缩状态|

## 一个完整的示例

```html
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
      我是#{label}
      <em>#{test.a}</em>
    </VueFurcateTree>
  </div>
</template>

<script>
import VueFurcateTree from 'vue-furcate-tree'
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
```
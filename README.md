# vue-furcate-tree
vue分叉树、组织架构图组件，支持使用模板语法来定义每个节点渲染方式

## 使用
```js
<VueFurcateTree 
    :ft-data="ftData" 
    @click="click"
    @expand="expand"
>
    我是#{label}
    <em>#{test.a}</em>
</VueFurcateTree>

// ftData格式
[
    {
        id: 0,          // 必须的，一个唯一标识，用于遍历node时为vnode的key
        expand: true,   // 必须属性，表示子级节点是否展开
        label: '节点1', // 任意自定义属性，将来可用于在模板变量
        test: {
            a: 'b'      // 这也是任意自定义属性，可以在模板中使用test.a方式访问变量
        },
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
                            a: 'c'
                        }
                    },
                    {
                        id: 4,
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
组件将插槽改造为节点渲染模板，可以在模板中使用形式如`#{prop}`的标签访问ftData中每个节点的属性

例如你的某个节点数据是这样
```js
{
    id: 1,
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
| `ftData` | `Array` | 一个有父子级关系的节点对象数组，每个节点对象必须有两个属性：id和expand，具体上方用法注释 |
| `renderFunc` | `Function` | 函数式渲染节点方法，返回值为字符串，字符串中可以包含html标签，此处本质是dom.innerHTML，参数为当前节点的数据对象，`注意：如果有了此属性，模板编译方式会失效` |
```js
    renderFunc(nodeData) {
      return nodeData.label
    }
```

## 事件

| 事件名称 | 参数 | 说明 |
| ---------- | ----------- | ----------- |
| click | `nodeData {Object}`, `event` | 每个节点的点击事件，`nodeData`：当前点击的节点数据, `event`：事件对象 |
| ---------- | ----------- | ----------- |
| expand | `data {Object}` | 展开/收缩时触发，参数`data`有两个属性，`nodeData`：当前点击的节点数据，`expanded`：展开状态还是收缩状态|

## 一个完整的实例

```html
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
import VueFurcateTree from 'vue-furcate-tree'
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
            a: 'a'
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
                    a: 'c'
                  }
                },
                {
                  id: 4,
                  label: '节点3',
                  test: {
                    a: 'd'
                  }
                },
                {
                  id: 5,
                  label: '节点3',
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
/*!
 * vue furcate tree Javascript Library
 * weitamingting - v1.0.0 (2020-05-16T14:55:51+0800)
 * https://github.com/weitamingting | Released under MIT license
 */

/**
 * 渲染树
 * @param {Function} h 
 * @param {Object} context 
 * @param {Array} nodeListData 父组件传入的props
 */
const renderTree = (h, context, nodeListData) => {
  if(!nodeListData && nodeListData.length < 0) {
    return
  }
  const nodes = []
  nodeListData.forEach(item => {
    nodes.push(renderNode(h, context, item))
  })
  return nodes
}

/**
 * 渲染每个节点
 * @param {Function} h 
 * @param {Object} context 
 * @param {Object} nodeData 
 */
const renderNode = (h, context, nodeData) => {
  const hasChildren = nodeData.children && nodeData.children.length > 0

  // 如果有子节点，则在vue-ftree-children容器中继续循环子节点
  // subNodes：加上了vue-ftree-children容器的子节点集合
  const subNodes = []
  if(hasChildren) {
    // children：当前节点的子节点集合
    const children = []

    nodeData.children.forEach(item => {
      children.push(renderNode(h, context, item))
    })
    subNodes.push(
      h('div', {
        class: {
          'vue-ftree-children': true
        }
      }, children)
    )
  }
  
  const node = h('div', {
    class: {
      'vue-ftree-node': true,
      'has-children': hasChildren
    }
  }, [
    renderContent(h, context, nodeData), subNodes
  ])
  
  return node
}

// 渲染class为vue-ftree-node-content的dom
const renderContent = (h, context, nodeData) => {
  const listeners = {}
  const contextListeners = context.listeners
  if(contextListeners.expand){
    listeners.click = function() {
      nodeData.expand = !nodeData.expand
      // 监听触发展开收缩事件
      contextListeners.expand({
        nodeData,
        expanded: nodeData.expand
      })
    }
  }
  return h('div', {
    class: {
      'vue-ftree-node-content': true,
      'vue-ftree-expand': nodeData.expand
    },
    on: listeners
  },
  [renderContentInner(h, context, nodeData)])
}

/**
 * 深拷贝vnode
 * @param {Function} createElement 
 * @param {Array} vnodes 
 * @return {Array}
 */
function deepClone(createElement, vnodes) {
  function cloneVNode(vnode) {
      const clonedChildren = vnode.children && vnode
          .children
          .map(vnode => cloneVNode(vnode));
      const cloned = createElement(vnode.tag, vnode.data, clonedChildren);
      cloned.text = vnode.text;
      cloned.isComment = vnode.isComment;
      cloned.componentOptions = vnode.componentOptions;
      cloned.elm = vnode.elm;
      cloned.context = vnode.context;
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      return cloned;
  }
  const clonedVNodes = vnodes.map(vnode => cloneVNode(vnode))
  return clonedVNodes;
}

/**
 * 渲染class为vue-ftree-node-content-inner的dom
 * @param {Function} h 
 * @param {Object} context 
 * @param {Object} nodeData 
 */
const renderContentInner = (h, context, nodeData) => {
  const renderFunction = context.props.renderFunc

  // 当自定义了渲染函数时按照自定义方式渲染
  if(renderFunction && Object.prototype.toString.call(renderFunction) === '[object Function]') {
    const innerHTML = renderFunction(nodeData)
    const listeners = {}
    const contextListeners = context.listeners
    if(contextListeners.click){
      listeners.click = function() {
        contextListeners.click(nodeData, event)
      }
    }

    return h('div', {
      class: ['vue-ftree-node-content-inner'],
      domProps: {
        innerHTML
      },
      on: listeners
    }, [])
  }
  // 将组件slot作为模板，需要深拷贝
  const slotTemplate = deepClone(h, context.children)

  return h('div', {
    class: ['vue-ftree-node-content-inner'],
    on: {
      click: function(event) {
        if(context.listeners.click) {
          context.listeners.click(nodeData, event)
        }
      }
    }
  }, renderTemplate(slotTemplate, nodeData))
}

// 处理模板
const renderTemplate = (template, nodeData) => {
  template.forEach(item => {
    let text = item.text
    if(text) {
      text = text.trim()
      
      // 进行正则匹配，找出模板字符串
      const reg = /\#\{.*?\}/g
      text = text.replace(reg, function(matched) {
        // 移除匹配到的字符串中的#{}，得到纯净的节点属性key值形式为：a.b.c
        const attrName = matched.replace(/\#|\{|\}/g, '')

        // 用.号分割字符串，得到每一级的属性名
        const splitByDot = attrName.split('.')
        let value = nodeData

        // 记录属性查询路径
        let errorLog = []
        // 遍历每个属性key，按顺序不断下钻，最终得到value
        for(let i = 0, l = splitByDot.length; i < l; i++) {
          errorLog.push(splitByDot[i])
          try{
            value = value[splitByDot[i]]
          } catch(e) {
            // 出现未定义的属性名时，抛出错误
            delete(nodeData.children)
            throw Error('节点' + JSON.stringify(nodeData) + '中无法找到属性：' + errorLog.join('.'))
          }
        }
        return value
      })
      item.text = text
    }
    if(item.children && item.children.length > 0) {
      renderTemplate(item.children, nodeData)
    }
  })

  return template
}

const render = (h, context) => {
  const { props } = context
  const nodeData = props.nodeData
  const nodes = renderTree(h, context, nodeData)

  return h('div', {
    class: ['vue-ftree']
  }, [
    nodes
  ])
}

export default render

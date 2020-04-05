const doResize = (el, binding, vnode) => {
  const { componentInstance: $table } = vnode
  const { value } = binding

  if (!$table.height) {
    throw new Error(`el-$table must set the height. Such as height='100px'`)
  }
  const bottomOffset = (value && value.bottomOffset) || 30

  if (!$table) return
  const height = window.innerHeight - el.getBoundingClientRect().top - bottomOffset;
  
  $table.layout.setHeight(height)
  $table.doLayout()
}

export default {
  bind(el, binding, vnode) {
    el.resizeListener = () => {
      doResize(el, binding, vnode)
    }
    window.addEventListener('resize', el.resizeListener)
  },
  update(el, binding, vnode) {
    doResize(el, binding, vnode)
  },
  unbind(el) {
    window.removeEventListener('resize',el.resizeListener)
  }
}

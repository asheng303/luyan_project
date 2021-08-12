export default {
  addItem(context, payload) {
    return new Promise((resolve) => {
      context.commit('addToItem', payload)
      resolve('成功')
    })
  },
  changeTitle(context,payload){
    return new Promise((resolve) => {
      context.commit('changeTitle', payload)
      resolve('成功')
    })
  },
  changeName(context,payload){
    return new Promise((resolve) => {
      context.commit('changeName', payload)
      resolve('成功')
    })
  },
  changeTime(context,payload){
    return new Promise((resolve) => {
      context.commit('changeTime', payload)
      resolve('成功')
    })
  },
}
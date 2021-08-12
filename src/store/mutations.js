export default {
  //mutations里面的每个方法，尽可能只做一件事情，如果不分开处理的话，之后就不好区分来验证错误
  addToItem(state, payload) {
    state.itemValue=payload
  },
  changeTitle(state,payload){
    state.itemValue.title=payload
  },
  changeName(state,payload){
    state.itemValue.name.push(payload)
  },
  changeTime(state,payload){
    state.itemValue.timetoupdata=payload
  },
}
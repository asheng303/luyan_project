<!--  -->
<template>
<div class="note">该路演计划已添加路演日程，部分内容不能变更 <i class="icon-close" @click="change"></i></div>
</template>

<script>
export default {
data() {
return {

}
},
methods:{
 change(){
   this.$emit("change")
 }
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.note{
  position: relative;
  width: 375px;
  height: 37px;
  background-color: #fff5e4;
  top: 64px;
  left: 0px;
  line-height: 37px;
  font-size: 12px;
  color:#C79557;
  padding-left: 15px;
}
.note i{
  position: absolute;
  right:15px ;
  top:13px;
}
</style>
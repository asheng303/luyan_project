<!--  -->
<template>
      <mt-header title="路演排期" fixed>
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      </mt-header>
</template>

<script>
export default {
  name:"HomaNav",
data() {
return {

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
.mint-header{
  width: 375px;
  background-color: var(--color-tint);
  height:64px;
  font-size:17px;
  padding-top:20px;
}
</style>
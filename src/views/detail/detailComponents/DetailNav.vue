<!--  -->
<template>
      <mt-header title="日程安排" fixed>
      <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" id="right">预约日程</mt-button>
      </mt-header>
</template>

<script>
export default {
  name:"DetailNav",
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
  background-color: #fff;
  height:64px;
  font-size:17px;
  padding-top:20px;
  color:black;
}
.mint-header #right{
  font-size: 14px;
  color:var(--color-tint);

}
</style>
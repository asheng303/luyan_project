<!--  -->
<template>
  <div id="hometimer">
    2021年01月
  </div>
</template>

<script>
export default {
  name: "HomeTimer",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#hometimer {
  margin-top: 80px;
  width: 95px;
  height: 18px;
  margin-left: 15px;
  border-left: 2px solid var(--color-tint);
  padding-left: 12px;
  line-height: 18px;
  font-size: 15px;
}
</style>
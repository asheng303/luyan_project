<!--  -->
<template>
      <mt-header title="查看路演计划" fixed>
      <router-link to slot="left">
      <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button v-if="flag" slot="right" id="right" @click="edit">{{firstmessage}}</mt-button>
      <mt-button v-else slot="right" id="right" @click="finish">{{secondmessage}}</mt-button>
      </mt-header>
</template>

<script>
export default {
  name:"ProfileNav",
data() {
return {
 firstmessage:"编辑",
 secondmessage:"完成",
 flag:true,
}
},
methods:{
  edit(){
    this.flag=false
    this.$emit('edit')
    this.$bus.$emit('edited')
  },
    finish(){
    this.flag=true
    this.$emit('finish')
    this.$bus.$emit('finished')

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
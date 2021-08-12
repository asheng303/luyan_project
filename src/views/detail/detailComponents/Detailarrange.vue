<!--  -->
<template>
<div id="DetailArrange">
  <template v-for="(item,i) in count" >
<arrange-item  v-if='flag' :key=i :info="info"></arrange-item>
  </template>
</div>
</template>

<script>
import arrangeItem from "components/content/arrangeItem/arrangeItem";
import axios from "axios";

export default {
  name:"DetailArrange",
data() {
return {
  count:null,
  info:{},
  flag:false,
}
},
components:{
  arrangeItem
},
methods: {
    getArrange() {
      axios.get("/api/arranments.json").then(res => {
        this.flag=true;
        this.info = res;
        })
},
},
//生命周期 - 创建完成（访问当前this实例）
created() {
  let num=this.$store.state.itemValue.count[0]
  this.count=new Array(num).fill(0)
  this.getArrange()
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    this.$bus.$on("countMessage",res=>{
    this.count=new Array(res[0]).fill(0)
  })
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
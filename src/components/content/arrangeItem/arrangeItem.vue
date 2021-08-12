<!--  -->
<template>
<div id="arrangeItem">
<div class="time">{{info.data.data}} {{info.data.time}}</div>
<div class="second">
  <div class="company">{{info.data.company}}</div>
<div class="address">{{info.data.name}} | {{info.data.address}}</div>
<div class="create">{{info.data.createdby}} 创建于{{info.data.createtime[0]}} {{info.data.createtime[1]}}</div>
</div>

</div>
</template>

<script>
export default {
  name:"arrangeItem",
data() {
return {
}
},
props:{
  info:{
    type:Object,
    default(){
      return {}
    }
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
/* @import url(); 引入css类 */
#arrangeItem{
  width: 345px;
  height: 149px;
  margin:12px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 3px rgba(0,0,0,0.05)
}
.time{
  height: 47px;
  vertical-align: center;
  padding:17px 15px;
  font-size: 16px;
  background-color: #f9faff;
  color:var(--color-tint)
}
.second{
  height: 102px;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  padding: 15px;
}
.second .company{
  font-size: 14px;
  flex: 1;

}
.address{
  flex: 1;

}
.create{
  flex: 1;
  color:#aaaaaa;
}
</style>
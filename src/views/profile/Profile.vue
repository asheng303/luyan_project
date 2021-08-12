<!--  -->
<template>
<div id="profile" >
<profile-nav @edit="Activate" @finish="deactivate"></profile-nav>
<profile-note v-if="isActive" @click.native="deactivate"></profile-note>
<div v-else class="bgc"></div>
<profile-input></profile-input>
</div>
</template>

<script>
import ProfileNav from "./profileComponents/ProfileNav"
import ProfileNote from "./profileComponents/ProfileNote"
import ProfileInput from  "./profileComponents/ProfileInput"
export default {
  name:"profile",
  components:{
    ProfileNav,
    ProfileNote,
    ProfileInput
  },
data() {
return {
  isActive:false
}
},
methods:{
  changeActive(){
    this.isActive=!this.isActive
  },
  deactivate(){
    this.isActive=false
  },
  Activate(){
    this.isActive=true
    
  },
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
.bgc{
position: relative;
top: 64px;
left: 0px;
height: 10px;
background-color: rgb(249, 249, 249);
}
</style>
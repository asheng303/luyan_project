<!--  -->
<template>
<div id="Detail">
  <detail-nav/>
  <detail-course></detail-course>
  <detail-date/>
  <div class="space"></div>
  <detail-arrange/>
  </div>
</template>

<script>
import DetailNav from "./detailComponents/DetailNav.vue";
import DetailCourse from "./detailComponents/DetailCourse.vue"
import DetailDate from "./detailComponents/DetailDate.vue"
import DetailArrange from "./detailComponents/Detailarrange.vue"
export default {
  name:"Detail",
  components:{
    DetailNav,
    DetailCourse,
    DetailDate,
    DetailArrange
  },
data() {
return {
 
}
},
methods:{

},
computed:{
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
.space{
  height: 10px;
  background-color: #f9f9f9;
}
</style>
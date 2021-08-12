<!--  -->
<template>
  <div class="course-list">
    <course-item
      v-for="(item,index) in coursesOf"
      :key="index"
      :coursesitem="item"
    ></course-item>
  </div>
</template>

<script>
import courseItem from "components/content/courseItem/courseItem";
export default {
  name: "courseList",
  data() {
    return {};
  },
  props: {
    coursesOf: {
      type: Array,
      default() {
        [];
      }
    }
  },
  components: {
    courseItem
  },
  computed: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  },
  updated(){
    // console.log(this.coursesOf);

  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.course-list{
  width:345px;
  margin:15px auto 0 auto;
  height:649px;
}
</style>
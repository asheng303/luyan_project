<!--  -->
<template>
  <div id="home">
    <HomeNav></HomeNav>
    <home-timer/>
    <home-tabbar @tabClick="tabClick"></home-tabbar>
    <course-list
      :coursesOf="showCoursesList"
      v-if="flag"
    ></course-list>
  </div>
</template>

<script>
// 导入网络请求方法
import axios from "axios";
import HomeNav from "./homeComponents/HomeNav.vue";
import HomeTimer from "./homeComponents/HomeTimer.vue";
import HomeTabbar from "./homeComponents/HomeTabbar.vue";
import CourseList from "./homeComponents/CourseList.vue";

export default {
  name: "Home",
  data() {
    return {
      courses: null,
      date: 10,
      value: {}, //下面的安排构成的arr
      flag: false
    };
  },
  components: {
    HomeNav,
    HomeTimer,
    HomeTabbar,
    CourseList
  },
  computed: {
    showCoursesList() {
      return this.courses[this.date].list;
    }
  },
  methods: {
    getHomeMultidata() {
      axios.get("/api/courses.json").then(res => {
        this.courses = res.data.courses;
        this.flag = true;
      });
    },
    tabClick(date) {
      this.date = date;
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  beforecreated() {},
  created() {
    this.getHomeMultidata();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
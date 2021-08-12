<!--  -->
<template>
<div id="DetailCourse" @click="CourseClick">
<div class="CourseTitle">{{courseTitle}} <i class="is-right icon-cheveron-right"></i></div>
<div class="CourseDate CourseCommon">时间：{{getDate(0)}} {{getDay(0)}} - {{getDate(3)}} {{getDay(3)}}</div>
<div class="CourseLocation CourseCommon">区域：{{courseLocation}}</div>
<div class="CourseType CourseCommon">路演类型：{{courseType}}路演</div>
<div class="CourseNmae CourseCommon">路演分析师：{{courseName[0]}} | {{courseName[1]}}</div>
<div class="CourseTime CourseCommon">
  <div class="firstone ">客户可约时间：</div><div class="appoint"> {{courseTime.substring(0,courseTime.length-8)}} <span></span> {{courseTime.substring(courseTime.length-8)}}</div></div>
<div class="update">张三 创建于{{courseUpdate}}</div>
</div>
</template>

<script>
export default {
  name:"DetailCourse",
data() {
return {
 
}
},
methods:{
      getDay(index) {
      if(Object.keys(this.$store.state.itemValue).length!==0){
      return Object.keys(this.$store.state.itemValue.data[index])[0];
      }
    },
    getDate(index) {
      if(Object.keys(this.$store.state.itemValue).length!==0){
      let key = this.getDay(index);
      return this.$store.state.itemValue.data[index][key];
      }
    },
    CourseClick(){
      this.$router.push('/profile')
    }
},
computed:{
  fetch(){
    return this.$store.state.itemValue
  },
  courseTitle(){
    return this.$store.state.itemValue.title
  },
  courseLocation(){
    return this.$store.state.itemValue.location
  },
  courseType(){
    //这里有点小问题需要判断一下itemValue是存在的
    if(this.$store.state.itemValue.post.length>3){
    return this.$store.state.itemValue.post.substring(3,)
    }
    else{
    return this.$store.state.itemValue.post

    }
  },
  courseName(){
    return this.$store.state.itemValue.name
  },
  courseTime(){
    return this.$store.state.itemValue.appointment
  },
  courseUpdate(){
    return this.$store.state.itemValue.timetoupdata
  }
},
//生命周期 - 创建完成（访问当前this实例）
created() {
//  console.log(this.$store.state.itemValue);
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
/* 这里应该是个背景图 */
#DetailCourse{
  position: relative;
  height: 279px;
  width: 345px;
  margin:74px auto 0px auto;
  background: url(~assets/img/coursebg.jpg);
  color:#fff;
  border-radius: 6px;
}
.CourseTitle{
  position: relative;
  width: 345px;
  height: 65px;
  font-size: 16px;
  padding:15px;
  line-height: 35px;
}
.is-right{
  position: absolute;
  right:12px;
  top:24px;
}
.CourseCommon{
  margin-left:15px;
  font-size: 13px;
  margin-bottom: 8px;
}
.appoint span{
  display: inline-block;
  width: 80px;
  height: 10px;
}
.update{
  position: absolute;
  height: 30px;
  width: 345px;
  bottom: 0;
  left: 0;
  font-size:12px ;
  padding-left:15px;
  background-color: rgb(103, 144, 254);
  line-height: 30px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

/* 箭头样式及有一行前面空要调整 */
</style>
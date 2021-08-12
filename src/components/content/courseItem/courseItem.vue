<!--  -->
<template>
  <div id="courseItem" class="courseItem" :class="{changeHeight:this.coursesitem.customer.length!==0}" @click="courseClick">
    <div class="first">
      <span class="post">{{coursesitem.post}}</span>
      <span class="title">{{coursesitem.title}}</span>
    </div>
    <div class="second">
      <span>路演分析师：</span>
      <span
        class="name"
        v-for="(item,i) in coursesitem.name"
        :key="i"
      >{{item}} </span>
    </div>
    <div
      class="customer"
      v-if="this.coursesitem.customer.length"
    >机构客户：{{coursesitem.customer[0]}}|{{coursesitem.customer[1]}}</div>
  <div class="count">
    排期：本周{{coursesitem.count[0]}}场/共{{coursesitem.count[1]}}场
  </div>
  <div class="datefrom2">
    <span><img src="~assets/img/clock.jpg"/></span>{{getDate(0)}} {{getDay(0)}}-{{getDate(3)}} {{getDay(3)}}
  </div>

  </div>
</template>

<script>
export default {
  name: "courseItem",
  data() {
    return {
    };
  },
  props: {
    coursesitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    getDay(index) {
      return Object.keys(this.coursesitem.data[index])[0];
    },
    getDate(index) {
      let key = this.getDay(index);
      return this.coursesitem.data[index][key];
    },
    courseClick() {
      this.$store.dispatch("addItem", this.coursesitem)
      this.$router.push("/detail/" + this.coursesitem.iid);
    }
  },
  computed: {
    // itemvaluepost() {
    //   return this.itemvalue.post;
    // },
    // itemvaluetitle() {
    //   return this.itemvalue.title;
    // },
    // itemvaluename() {
    //   return this.itemvalue.name;
    // },
    // itemvaluecount() {
    //   return this.itemvalue.count;
    // }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.courseItem{
  width:345px;
  height:140px;
  padding-top:15px;
  box-shadow:1px 1px 6px 2px rgba(0,0,0,.1) ;
  margin-bottom:15px;
}
.courseItem .first{
  margin-left:15px;
  margin-bottom:12px;
}
.courseItem .first .post{
  display:inline-block;
  font-size:11px;
  width:73px;
  height:16px;
  color:var(--color-tint);
  background-color:var(--bgc);
  border:1px solid var(--border-color);
  border-radius:5px;
  text-align:center;
  margin-right:5px;
}
.courseItem .first .title{
  font-size:16px;
}
.second{
  margin-left:15px;
  margin-bottom:12px;
  font-size:13px;
}
.customer{
  margin-left:15px;
  margin-bottom:12px;
  font-size:13px;
}
.count{
  margin-left:15px;
  margin-bottom:19px;
  font-size:13px;
}
.datefrom2{
  background-color:var(--bgc);
  font-size:12px;
  height:35px;
  line-height:35px;
  padding-left:15px;
}
.datefrom2 img{
  vertical-align: text-bottom;
  margin-right: 5px;
}
.changeHeight{
  height:166px;
}
</style>
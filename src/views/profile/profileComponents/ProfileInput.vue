<!--  -->
<template>
<div id="ProfileInput">
  <form class="inputMessage">
    <div class="input border">
    路演类型<input type="text" name="type" value="路演" disabled="disabled" :class="{grey:!isShow}">
    </div>
    <div class="input border">
    交流主题 <span :class="{show:isShow}">*</span> <input type="text" name="type" :value="title" @input="updateTitle" :disabled="disable">
    </div>
    <div class="input border">
    路演分析师<input type="text" name="type" :value="name" @input="updateName" :disabled="disable">
    </div>
    <div class="input border">
    区域<input type="text" name="type" :value="location" disabled="disabled" :class="{grey:!isShow}">
    </div>
    <div class="input border">
    开始日期<input type="text" name="type" value="2022年2月21号 星期五" disabled="disabled" :class="{grey:!isShow}">
    </div>
    <div class="input border">
    结束日期<input type="text" name="type" value="2022年2月24号 星期二" disabled="disabled" :class="{grey:!isShow}">
    </div>
    <div class="input border">
    上市公司<input type="text" name="type" value="深圳市天弘股份有限公司" disabled="disabled" :class="{grey:!isShow}">
    </div>
    <div class="input border">
    上市公司出席人员<i :class="{show:isShow}"><i class="icon-add-outline" @click="appendDom"></i></i> 
    </div>
    <div class="name border">
    <div class="nametwo" v-show="!isDeleteOne">
    <input type="text" name="type" :value="firstone" :disabled="disable" ><i :class="{show:isShow}" @click="deleteItemOne"><i class="icon-close"></i></i> 
    </div>
    <div class="nametwo" v-show="!isDeleteTwo">
    <input type="text" name="type" :value="secondone" :disabled="disable"><i :class="{show:isShow}" @click="deleteItemTwo"><i class="icon-close"></i></i> 
      </div>
    </div>
    <div class="noticeone border">
    备注<br/>
    <div class="notice" :contenteditable="content">默认两行高度，内容自适应变高</div>
    </div>
    <div class="input">
      需求发起人<span :class="{show:isShow}">*</span><input type="text" name="xuqiu" id="" v-model="promote" :disabled="disable">
    </div>
  </form>
      <div  class="bgc"></div>
    <div class="input update" :class="{show:!isShow}">
      张三 创建于{{UpdateTime}}
    </div>
    <div class="delete" :class="{show:isShow}">删除</div>
</div>
</template>

<script>
import {mapState} from "vuex"
import { formatDate } from "assets/common/utils.js";

export default {
  name:"ProfileInput",
data() {
return {
  firstone:'王峰 职务名称',
  secondone:'王峰 职务名称2',
  promote:"范小龙",
  disable:true,
  content:false,
  isShow:true,
  isDeleteOne:false,
  isDeleteTwo:false,
  counter:0,
  UpdateTime:"2019年06月06日 09:47"
}
},
computed:{
   ...mapState({
     title:(state)=>state.itemValue.title,
     name:(state)=>state.itemValue.name,
     location:(state)=>state.itemValue.location,
     date:(state)=>state.itemValue.data,
     customer:(state)=>state.itemValue.customer,
     timetoupdate:(state)=>state.itemValue.timetoupdata,
   })
},
methods:{
  updateTitle(e){
  this.$store.dispatch('changeTitle',e.target.value)
  },
    updateName(e){
  this.$store.dispatch('changeName',e.target.value)
  },
    deleteItemOne(){
      this.isDeleteOne=true;
  },
      deleteItemTwo(){
      this.isDeleteTwo=true;
  },
  appendDom(){
      ++this.counter
      if(this.counter==1){
      this.isDeleteOne=false;
      }
      if(this.counter==2){
      this.isDeleteTwo=false;
      }
  },
   showDate() {
      //服务器返回的时间不会是一个实际的日期，发过来的是一个毫秒数，我们要自己格式化
      //是以时间元年为起点，返回对应的时间戳
      let date = new Date();
      //这里的这个formatDate在很多语言中都内置了，但是js没有，这里是我直接网上复制过来的，看他的源码需要一定的正则知识
      return formatDate(date, "yyyy年MM月dd日 hh:mm");
    }
  // getDay(index) {
  //   return Object.keys(this.date[index])[0];
  // },
  // getDate(index) {
  //   let key = this.getDay(index);
  //   return this.date[index][key]+''+Object.keys(this.date[index])[0];
  // },
},
//生命周期 - 创建完成（访问当前this实例）
created() {
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
  this.$bus.$on("edited",()=>{
    this.disable=false;
    this.isShow=false;
    this.content=true;
  })
    this.$bus.$on("finished",()=>{
    this.disable=true;
    this.isShow=true;
    this.content=false;
    this.UpdateTime=this.showDate()
    this.$store.dispatch('changeTime',this.UpdateTime)
  })
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
#ProfileInput{
  position: relative;
  top: 65px;
  left: 0px;

}
/* input加disabled以后背景颜色会自动变色（应该是浏览器设置之类的问题 */
input{
  font-size: 14px;
  border: 0px;
  color:#7a7a7a;
  background-color: #fff;
}
.inputMessage{
  font-size: 15px;
    padding-left:15px; 
}
.input{
  position: relative;
  line-height: 50px;
  height: 50px;
}
.input input{
  position: absolute;
  right:20px ;
  top: 15px;
  outline: 0px;
  border: 0;
  text-align: right;
}
.input span{
  vertical-align: middle;
  color:red;
}
.nametwo{
  height: 41px;
  line-height: 41px;
}
.noticeone{
  padding-top: 15px;
}
.notice{
  padding-top: 10px;
  display: inline-block;
  height: 97px;
  width: 375px;
  font-size: 14px;
}
.update{
  padding-right: 15px;
  font-size: 14px;
  color:#7a7a7a;
  text-align: right;
}
.bgc{
height: 10px;
background-color: rgb(249, 249, 249);
}
.show{
  display: none;
}
.delete{
  height: 50px;
  width: 375px;
  line-height: 50px;
  text-align: center;
  color:red;
}
i {
 font-style: normal;
}
[class^="icon"]{
  color:#9c9c9c;
  font-size: 10px;
}
.input i{
 position: absolute;
 right: 10px;
 top: 2.46667vw;
 font-size: 18px;
}
.border{
  border-bottom:0.5px solid #eae9ec;
}
.grey{
  color: #cccccc;
}

</style>
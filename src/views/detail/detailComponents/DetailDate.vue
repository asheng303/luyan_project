<!--  -->
<template>
  <div id="DetailDate">
    <dateitem
      v-for="(item,index) in getData"
      :key="index"
      :item="item"
      @click.native="tabClick(index,getCount)"
      :class="{active:index===currentIndex}"
      :count="getCount"
    >
      </dateitem>
  </div>
</template>

<script>
import dateitem from "components/content/dateItem/dateitem";

export default {
  name: "DetailDate",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
    dateitem
  },
  computed:{
    getData(){
      return this.$store.state.itemValue.data
    },
    getCount(){
      return this.$store.state.itemValue.count
    },
  },
  methods: {
    tabClick(index,count) {
      this.currentIndex = index;
      this.$bus.$emit("countMessage", count);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#DetailDate {
  width: 422px;
  height: 55px;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 18px;
  overflow: hidden;
}
</style>
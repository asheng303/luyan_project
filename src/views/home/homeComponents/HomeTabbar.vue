<!--  -->
<template>
  <div id="HomeTabbar">
    <tabbaritem
      v-for="(item,index) in dates"
      :key="index"
      :item="item"
      @click.native="tabClick(index,item.date)"
      :class="{active:index===currentIndex}"
    >
      </tabbaritem>
  </div>
</template>

<script>
import tabbaritem from "components/content/tabbar/tabbaritem";
import axios from "axios";

export default {
  name: "HomeTabbar",
  data() {
    return {
      dates: [],
      currentIndex: 0
    };
  },
  components: {
    tabbaritem
  },
  methods: {
    getdates() {
      axios.get("/api/dates.json").then(res => {
        this.dates = res.data.dates;
      });
    },
    tabClick(index, date) {
      this.currentIndex = index;
      this.$emit("tabClick", date);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.getdates();
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#HomeTabbar {
  width: 355px;
  display: flex;
  height: 49px;
  margin: 9px auto 0 auto;
}
</style>
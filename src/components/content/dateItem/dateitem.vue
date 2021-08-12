<template>
  <div
    id="date-item"
    class="date-item"
  >
    <!-- {{item}} -->
    <div class="item-date">{{getValue}}({{getCount}})</div>
    <div class="item-day">{{getKey}}</div>
    <div class="blue">

    </div>
  </div>
</template>

<script>
export default {
  name: "DateItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      defualt(){
        return {}
      }
    },
    count:{
      type:Array,
      defualt(){
        []
      }
    }
  },
  computed: {
    getKey(){
      return Object.keys(this.item)[0]
    },
    getValue(){
      return this.item[Object.keys(this.item)[0]]
    },
    getCount(){
      return this.count[0]
    },
    },
};
</script>

<style scoped>
.date-item {
  width: 77px;
  margin-left: 30px;
  text-align: center;
}
.item-date {
  font-size: 14px;
}
.item-day {
  font-size: 12px;
}
.active .blue {
  width: 16px;
  height: 2px;
  background-color: var(--color-tint);
  margin-top: 4px;
  margin-left: 30px;
}

</style>
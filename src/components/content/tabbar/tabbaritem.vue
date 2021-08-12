<template>
  <div
    id="tab-bar-item"
    class="tab-bar-item"
  >
    <div class="item-day">{{item.day}}</div>
    <div class="item-date">{{item.date}}</div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
}
.item-date {
  width: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 16px;
  height: 28px;
}
.item-day {
  width: 28px;
  height: 12px;
  font-size: 12px;
  margin-bottom: 9px;
  text-align: center;
}
.active .item-date {
  border-radius: 28px;
  background-color: var(--color-tint);
  color: #fff;
}
.active .item-day {
  color: var(--color-tint);
}
</style>
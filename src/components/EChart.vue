<template>
  <div :id="id" class="lineBox"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { defineProps, onMounted } from "vue";
let chartDom = null,
  myChart = null;

onMounted(() => {
  chartDom = document.getElementById(`${props.id}`);
  myChart = echarts.init(chartDom, props.isDark ? "dark" : "");
  props.option && myChart.setOption(props.option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
});

let props = defineProps({
  id: {
    type: String,
    default: ""
  },
  option: {
    type: Object,
    default: () => {}
  },
  isDark: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: "400px"
  }
});
</script>

<style scoped>
.lineBox {
  width: 100%;
  height: v-bind("props.height");
}
</style>

<template>
  <span class="setting" @click="clickCollapse"><setting style="width: 1em; height: 1em; margin-right: 8px" /></span>
</template>

<script setup>
import { Setting } from "@element-plus/icons-vue";
import { useStore } from "vuex";
let store = useStore();
let clickCollapse = () => {
  store.commit("CHANGE_COLLAPSE", !store.state.isCollapse);
};
</script>

<style scoped>
.setting {
  font-size: 20px;
  cursor: pointer;
}
</style>

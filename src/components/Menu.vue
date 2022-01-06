<template>
  <el-menu
    background-color="#409EFF"
    text-color="#fff"
    active-text-color="rgb(0, 204, 255)"
    default-active="1"
    :collapse="store.state.isCollapse"
    class="el-menu-vertical-demo"
  >
    <el-sub-menu v-for="item in store.state.menuList" :key="item.id" :index="item.index">
      <template #title>
        <Icon class="icon" :icon="item.icon"></Icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.id" :index="child.index" @click="changeRoute(child.url)">{{
        child.title
      }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
let store = useStore();
let router = useRouter();
let changeRoute = (url) => {
  router.push(url);
};
</script>

<style lang="scss" scoped>
.el-menu--collapse {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  width: 200px;
  border-right: none;
  .icon {
    width: 18px;
    height: 18px;
    margin-right: 3px;
  }
}
</style>

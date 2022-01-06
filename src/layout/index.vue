<template>
  <el-container class="container">
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from "~/Menu.vue";
import Header from "~/Header.vue";
import { getCurrentInstance } from "vue";
import { useStore } from "vuex";
import $http from "@/request/http.js";
let { proxy } = getCurrentInstance();
let store = useStore();

let getMenuList = () => {
  // return Promise.resolve().then(() => {
  //   let res = [
  //     {
  //       id: 1,
  //       title: "菜单1",
  //       sort: 1,
  //       index: "1",
  //       iconName: "Setting",
  //       children: [{ id: 1, title: "菜单1-1", index: "1-1", sort: 1, url: "menu-setting" }]
  //     }
  //   ];
  //   return res;
  // });
  $http.post({}, "base/menu").then((res) => {
    if (res.code === 200) {
      // let menuFirstList = res.data.filter((item) => item.p_id === 0);
      // let menuSecondList = res.data.filter((item) => item.p_id !== 0);
      // menuFirstList.forEach((item) => {
      //   item.children = menuSecondList.filter((val) => val.p_id === item.id);
      // });
      proxy.$utils.setStore({ name: "menu", content: res.data });
      store.commit("SET_MENU", res.data);
    }
  });
};
getMenuList();
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .el-header {
    border-bottom: 1px solid rgba(204, 204, 204, 0.7);
    line-height: 60px;
  }
  .el-aside {
    width: auto !important;
    background-color: #409eff;
  }
}
</style>

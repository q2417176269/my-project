import { createApp, createVNode } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import utils from "./utils/util";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style/index";
import * as Icons from "@element-plus/icons";
import "./permission";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
let app = createApp(App);
const Icon = (props) => {
  const { icon } = props;
  return createVNode(Icons[icon]);
};
app.component("Icon", Icon);
function useTable(app) {
  // 给 vue 实例挂载内部对象，例如：
  app.use(ElementPlus);
  app.use(router);
  app.use(store);
  app.use(VXETable);
  app.config.globalProperties.$store = store;
  app.config.globalProperties.$utils = utils;
}
app.use(useTable).mount("#app");

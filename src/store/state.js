import { reactive } from "vue";
// import utils from "../utils/util.js";
const state = reactive({
  num: 0,
  menuList: [],
  isCollapse: false,
  tagList: []
});

export default state;

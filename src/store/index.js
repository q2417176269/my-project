import { createStore } from "vuex";
import state from "./state";
export default createStore({
  state: state,
  mutations: {
    SET_MENU(state, payload) {
      state.menuList = payload;
    },
    CHANGE_COLLAPSE(state, payload) {
      state.isCollapse = payload;
    },
  },
  actions: {},
  modules: {}
});

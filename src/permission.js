import router from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const whiteList = ["/login"];
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const hasToken = sessionStorage.getItem("token");
  if (hasToken) {
    if (to.path === "/login") {
      next({
        path: "/"
      });
      NProgress.done();
    } else {
      next();
      NProgress.done();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

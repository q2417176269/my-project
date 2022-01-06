import axios from "axios";
import { ElMessage } from "element-plus";
// 超时时间
axios.defaults.timeout = 1000 * 30;
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

// 请求体处理
axios.interceptors.request.use(
  (config) => {
    if (config.url.includes("login") || config.url.includes("register") || config.url.includes("sendemail")) {
      console.log("pass");
    } else {
      // if (!config.headers.authorization) {
      //   router.replace("/401");
      //   return;
      // }
      config.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
    }
    // headers中配置serialize为true开启序列化
    // if (config.methods === "post" && config.headers.serialize) {
    //   config.data = utils.serialize(config.data);
    //   delete config.data.serialize;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应体拦截处理
axios.interceptors.response.use(
  (res) => {
    const status = res.code;
    const message = res.msg || "未知错误";
    if (status === 400) {
      ElMessage.closeAll();
      ElMessage({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }
    return res.data;
  },
  (error) => {
    if (error.response.status === 500) {
      const message = error.message || "未知错误";
      ElMessage({
        message: message,
        type: "error"
      });
      return Promise.reject(new Error(message));
    }
    return error.response.data;
  }
);
export default axios;

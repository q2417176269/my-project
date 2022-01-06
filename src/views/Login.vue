<template>
  <div class="login">
    <div class="loginForm" :class="isFalse ? 'jelly' : ''">
      <div class="log-lf"></div>
      <div class="log-rg">
        <h1 class="title">LIME CODE</h1>
        <el-form ref="logForm" :model="loginForm" :rules="loginRules">
          <el-form-item prop="account">
            <el-input :prefix-icon="User" v-model.number="loginForm.account" placeholder="账号" size="small"></el-input>
          </el-form-item>
          <el-form-item prop="password" size="small">
            <el-input :prefix-icon="Lock" v-model="loginForm.password" show-password placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="logBtn" type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import $http from "@/request/http.js";
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { User, Lock } from "@element-plus/icons-vue";
/**
 *  登录操作
 */
let loginRules = {
  account: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
};
let isFalse = ref(false);
let router = useRouter();
let logForm = ref("");
let loginForm = reactive({
  account: "",
  password: ""
});
let changeStatus = () => {
  isFalse.value = true;
  setTimeout(() => {
    isFalse.value = false;
  }, 1000);
};
let login = () => {
  logForm.value.validate((valid, callback) => {
    if (valid) {
      $http.post(loginForm, "user/login").then((res) => {
        if (res.code === 200) {
          ElMessage({
            message: "登录成功",
            type: "success"
          });
          sessionStorage.setItem("token", res.token);
          router.push({ path: "dashbord" });
        } else {
          ElMessage({
            message: res.msg,
            type: "error"
          });
          changeStatus();
        }
      });
    } else {
      changeStatus();
      callback();
    }
  });
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/image/bg-01.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 60%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    .logBtn {
      width: 100%;
      border-radius: 20px;
      border-width: 0px;
      border-color: transparent;
      position: relative;
      z-index: 1;
      overflow: hidden;
      &::before {
        z-index: -1;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3em;
        height: 1em;
        border-radius: 50%;
        background-color: #9254de;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale(0, 0);
        transition: transform 0.45s ease-in-out;
      }

      &:hover::before {
        transform: translate3d(-50%, -50%, 0) scale(15, 15);
      }
    }
  }
  .log-lf {
    width: 50%;
    height: 100%;
    background-image: linear-gradient(to top, #008cff 0%, #00ecbc 100%);
    border-radius: 10px 0 0 10px;
  }
  .log-rg {
    width: 50%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    background: #fff;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      top: 50%;
      content: "";
      border: 20px solid transparent;
    }
    &::after {
      left: -35px;
      border-right: 20px solid #ffffff;
    }
    .el-form {
      width: 90% !important;
      div:nth-child(3) {
        margin-bottom: 0px;
      }
    }
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      width: 100%;
      margin-bottom: 24px;
      animation: animate 1.5s linear infinite;
    }
  }
  :deep(.el-input__inner) {
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 14px;
    caret-color: #00fbff;
  }
}
.jelly {
  animation: jelly 0.6s;
}
@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  20%,
  60% {
    transform: scale(0.9, 1.1);
  }
  40%,
  80% {
    transform: scale(1.1, 0.9);
  }
}
@keyframes animate {
  0%,
  100% {
    text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
  }
  25% {
    text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
  }
  50% {
    text-shadow: 1.5px -1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
  }
  75% {
    text-shadow: -1.5px 1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
  }
}
</style>

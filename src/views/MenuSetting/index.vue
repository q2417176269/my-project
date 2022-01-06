<template>
  <Container>
    <SearchHeader></SearchHeader>
    <el-upload
      ref="upload"
      class="upload-demo"
      action="/api/base/upload"
      :limit="1"
      :auto-upload="false"
      :on-exceed="handleExceed"
      :on-success="onSuccess"
    >
      <template #trigger>
        <el-button type="primary">select file</el-button>
      </template>
      <el-button class="ml-3" type="success" @click="submitUpload">upload to server</el-button>
      <template #tip>
        <div class="el-upload__tip" style="color: red">limit 1 file, new file will cover the old file</div>
      </template>
    </el-upload>
    <button @click="download">下载</button>
  </Container>
</template>

<script setup>
import Container from "~/Container.vue";
import SearchHeader from "~/SearchHeader.vue";
// import $http from "@/request/http.js";
import { ref } from "vue";
let url = ref("");
let name = ref("");
let onSuccess = (response, file, fileList) => {
  console.log(response, file, fileList);
  url.value = response.data.path;
  name.value = response.data.name;
};
const upload = ref();
let download = () => {
  // $http.post({ path: url.value }, `base/download`).then((res) => {
  //   console.log(res);
  // });
  window.open(`/download/${name.value}`);
};
const handleExceed = (files) => {
  upload.value.clearFiles();
  upload.value.handleStart(files[0]);
};
const submitUpload = () => {
  upload.value.submit();
};
</script>
<style scoped></style>

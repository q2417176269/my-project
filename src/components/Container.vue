<template>
  <div class="basic-container">
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss">
.basic-container {
  padding: 10px 0;
  box-sizing: border-box;
  .el-card {
    width: 100%;
    height: 100%;
  }
  &:first-child {
    padding-top: 0;
  }
}
</style>

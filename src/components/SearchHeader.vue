<template>
  <vxe-form ref="xForm" title-align="right" title-width="100" :data="searchData" @reset="resetEvent">
    <template v-for="(item, index) in searchOpt" :key="item.field">
      <vxe-form-item :title="item.title" span="8" :folding="index > 2">
        <template #default="{ data }" v-if="item.type === 'input'">
          <vxe-input v-model="data[item.field]" :placeholder="`请输入 ${item.title}`" clearable></vxe-input>
        </template>
        <template #default="{ data }" v-else-if="item.type === 'select'">
          <vxe-select v-model="data[item.field]" :placeholder="`请选择 ${item.title}`" clearable>
            <vxe-option v-for="dic in item.dicList" :key="dic.value" :value="dic.value" :label="dic.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
    </template>
    <vxe-form-item align="center" span="24" collapse-node>
      <template #default>
        <vxe-button status="primary" content="搜索"></vxe-button>
        <vxe-button content="清空" @click="resetEvent"></vxe-button>
      </template>
    </vxe-form-item>
  </vxe-form>
</template>

<script setup>
import { ref, reactive } from "vue";
let searchData = reactive({});
let xForm = ref("");
let searchOpt = [
  { title: "姓名", field: "name", type: "input" },
  { title: "年龄", field: "age", type: "input" },
  {
    title: "性别",
    field: "sex",
    type: "select",
    dicList: [
      { label: "男", value: "1" },
      { label: "女", value: "0" }
    ]
  },
  { title: "字段", field: "sex2", type: "input" }
];

// let searchEvent = () => {
//   console.log(searchData);
// };
const resetEvent = () => {
  VXETable.modal.message({ content: "重置事件", status: "info" });
};
</script>

<style scoped></style>

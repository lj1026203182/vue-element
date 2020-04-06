<template>
  <div class="app-container">
    <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
    <el-button
      v-clipboard:copy="inputData"
      v-clipboard:success="clipboardSuccess"
      type="primary"
      icon="el-icon-document"
    >copy</el-button>
  </div>
</template>

<script>
import clipboard from "@/directive/clipboard/index.js";

export default {
  name: "ClipboardDemo",
  directives: {
    clipboard
  },
  data() {
    return {
      inputData: "https://www.baidu.com"
    };
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500
      });
    }
  }
};
</script>


<template>
  <div class="dashboard-container">
    <div class="dashboard-text">首页</div>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="newVisitis" />
    </el-row>
  </div>
</template>

<script>
import LineChart from "@/components/Echarts/LineChart";

export default {
  name: "Home",
  components: {
    LineChart
  },
  data() {
    return {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

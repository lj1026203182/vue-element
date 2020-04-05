<template>
  <div class="app-container">
    <el-card shadow="hover" body-style="{padding: '10px'}" style="margin-bottom:12px">
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
    </el-card>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      highlight-current-row
      height="400"
      v-el-height-adaptive-table="{bottomOffset: 100}"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="page"
      :limit.sync="pageSize"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import { getList } from "@/api/table";
import Pagination from "@/components/Pagination";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      page: 1,
      pageSize: 10
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList({
        page: this.page,
        pageSize: this.pageSize
      }).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter() {
      this.page = 1;
      this.fetchData();
    }
  }
};
</script>

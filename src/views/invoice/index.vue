<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
        >Add new invoice</el-button
      >
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Created on" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.created_on | parseTime("{y}-{m}-{d}") }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Description" min-width="150px">
        <template slot-scope="{ row }">
          <span class="link-type" @click="handleUpdate(row)">{{
            row.name
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Amount" align="center" width="95">
        <template slot-scope="{ row }">
          <span>{{ row.amount | currencize("EUR") }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Bank account" min-width="100px" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.bank }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)"
            >Edit</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <invoice-dialog :title="textMap[dialogStatus]" />
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import { fetchList } from "@/api/invoice";
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import InvoiceDialog from "@/components/InvoiceDialog"; // secondary package based on el-dialog

export default {
  name: "Invoice",
  components: { Pagination, InvoiceDialog },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        sort: "+id"
      },
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      textMap: {
        update: "Edit Invoice",
        create: "Create Invoice"
      }
    };
  },
  created() {
    this.getList();
  },
  computed: {
    ...mapGetters(["dialogStatus", "refresh"])
  },
  watch: {
    refresh(refreshTable) {
      let tempItem = _.find(this.list, {
        id: refreshTable.id
      });

      if (tempItem) {
        const index = this.list.indexOf(tempItem);
        this.list.splice(index, 1, refreshTable);
      } else if (refreshTable) {
        this.list.unshift(refreshTable);
      }
    }
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
        this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    handleCreate() {
      this.$store.dispatch("app/toggleDialogStatus", "create");
      this.$store.dispatch("app/toggleDialog", true);
      this.$store.dispatch("invoice/resetTemp");
      /* this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      }); */
    },

    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.created_on = new Date(this.temp.created_on);
      this.$store.dispatch("app/toggleDialogStatus", "update");
      this.$store.dispatch("app/toggleDialog", true);

      this.$store.dispatch("invoice/setTemp", this.temp);
      /*
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      }); */
    },
    handleDelete(row) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      const index = this.list.indexOf(row);
      this.list.splice(index, 1);
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "created_on") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    }
  }
};
</script>

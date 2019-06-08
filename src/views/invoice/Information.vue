<template>
  <div>
    <el-form
      ref="dataForm"
      :rules="rules"
      :model="temp"
      label-position="left"
      label-width="100px"
      style="width: 100%; margin-left:10px;"
    >
      <el-form-item label="Date" prop="created_on">
        <el-date-picker
          v-model="temp.created_on"
          type="datetime"
          placeholder="Please pick a date"
        />
      </el-form-item>
      <el-form-item label="Name" prop="name">
        <el-input v-model="temp.name" />
      </el-form-item>
      <el-form-item label="Amount" prop="amount">
        <el-input v-model="temp.amount" />
      </el-form-item>
      <el-form-item label="Bank" prop="bank">
        <el-input v-model="temp.bank" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel()">Cancel</el-button>
      <el-button
        type="primary"
        @click="dialogStatus === 'create' ? createData() : updateData()"
        >Confirm</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createInvoice, updateInvoice } from "@/api/invoice";
export default {
  name: "Information",
  props: {
    rules: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["temp", "dialogStatus"])
  },
  methods: {
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
          createInvoice(this.temp).then(() => {
            this.$store.dispatch("invoice/refreshTable", this.temp);

            this.$store.dispatch("app/toggleDialog", false);
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp);
          tempData.created_on = +new Date(tempData.created_on); // change format to 1512031311464
          updateInvoice(tempData).then(() => {
            this.$store.dispatch("invoice/refreshTable", this.temp);
            this.$store.dispatch("app/toggleDialog", false);
            this.$notify({
              title: "Success",
              message: "Update Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleCancel() {
      this.$store.dispatch("app/toggleDialog", false);
    }
  }
};
</script>

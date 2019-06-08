<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogOpen"
    width="75%"
    :before-close="handleClose"
  >
    <div :class="classObj" class="app-wrapper">
      <div v-if="device === 'mobile'">
        TODO: It's mobile, Mobile template goes here
      </div>

      <div v-else>
        <invoice-tab />
      </div>
    </div>
  </el-dialog>
</template>

<script>
import InvoiceTab from "./components/InvoiceTab";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  props: {
    title: {
      type: String,
      default: "Create Invoice"
    }
  },
  components: {
    InvoiceTab
  },
  mixins: [ResizeMixin],
  computed: {
    dialogOpen() {
      return this.$store.state.app.dialogOpen;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    handleClose() {
      this.$store.dispatch("app/toggleDialog", false);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

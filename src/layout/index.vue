<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device === 'mobile'"></div>
    <admin-main />
  </div>
</template>

<script>
import AdminMain from "./components/AdminMain";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    AdminMain
  },
  mixins: [ResizeMixin],
  computed: {
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        mobile: this.device === "mobile"
      };
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

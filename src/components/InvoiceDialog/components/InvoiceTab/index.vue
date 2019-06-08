<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <tab-pane v-if="activeName == item.key" :type="item.label" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from "./components/TabPane";

export default {
  name: "Tab",
  components: { tabPane },
  data() {
    return {
      //TODO: dynamically from routes
      tabMapOptions: [
        { label: "Information", key: "info" },
        { label: "Payment", key: "pay" }
      ],
      activeName: "info"
    };
  }
};
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>

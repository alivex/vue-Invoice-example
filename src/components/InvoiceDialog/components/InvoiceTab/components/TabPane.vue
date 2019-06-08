<template>
  <section class="admin-main">
    <transition name="fade-transform" mode="out-in">
      <component v-bind:is="type"></component>
    </transition>
  </section>
</template>

<script>
import Information from "@/views/invoice/Information";
import Payment from "@/views/invoice/Payment";

export default {
  components: {
    Information,
    Payment
  },
  props: {
    type: {
      type: String,
      default: "Information"
    }
  }
};
</script>

<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assests-table v-if="!isLoading" :assets="assets"></px-assests-table>
  </div>
</template>
<script>
import api from "@/api.js";
import PxAssestsTable from "@/components/PxAssestsTable";

export default {
  name: "home",

  components: {
    PxAssestsTable
  },

  data() {
    return {
      assets: [],
      isLoading: false
    };
  },

  created() {
    this.isLoading = true;

    api
      .getAssests()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  }
};
</script>

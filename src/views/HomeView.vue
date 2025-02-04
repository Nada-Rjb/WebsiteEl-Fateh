<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopItems />
  </div>
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/HomePage/UpperBanner.vue";
import TheFeature from "@/components/HomePage/TheFeature.vue";
import TopItems from "@/components/HomePage/TopItems.vue";
import { productModule } from "@/store/products";
import { mapActions } from "pinia";
export default {
  components: {
    UpperBanner,
    TheFeature,
    TopItems,
  },
  methods: {
    ...mapActions(productModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

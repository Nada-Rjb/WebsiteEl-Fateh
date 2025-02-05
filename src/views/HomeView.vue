<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
    <TopItems />
    <!-- Ensure product is passed correctly -->
  </div>
  <div>
    <div style="display: flex; flex-wrap: wrap">
      <div
        v-for="(product, index) in FlashDeals.slice(0, 5)"
        :key="index"
        class="bg-red"
        style="
          flex: 1 0 20%;
          max-width: 20%;
          box-sizing: border-box;
          padding: 10px;
        "
      >
        <FlashDeals :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// Import components
import UpperBanner from "@/components/HomePage/UpperBanner.vue";
import TheFeature from "@/components/HomePage/TheFeature.vue";
import TopItems from "@/components/HomePage/TopItems.vue";
import FlashDeals from "@/components/HomePage/FlashDeals.vue";
import { productModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    UpperBanner,
    TheFeature,
    TopItems,
    FlashDeals,
  },
  computed: {
    // Map FlashDeals state from Pinia
    ...mapState(productModule, ["FlashDeals"]),
  },
  methods: {
    // Map getProducts action from Pinia store
    ...mapActions(productModule, ["getProducts"]),
  },
  async mounted() {
    // Fetch products when the component is mounted
    await this.getProducts();
  },
};
</script>

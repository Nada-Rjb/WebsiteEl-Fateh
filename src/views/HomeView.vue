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
export default {
  components: {
    UpperBanner,
    TheFeature,
    TopItems,
  },
};
</script>

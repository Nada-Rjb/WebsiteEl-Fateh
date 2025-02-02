<template>
  <div class="home">
    <UpperBanner />
    <TheFeature />
  </div>
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/HomePage/UpperBanner.vue";
import TheFeature from "@/components/HomePage/TheFeature.vue";
export default {
  components: {
    UpperBanner,
    TheFeature,
  },
};
</script>

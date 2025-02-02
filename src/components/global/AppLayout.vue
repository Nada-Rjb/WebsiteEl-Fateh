<template>
  <div class="layout">
    <v-layout class="position-relative">
      <AppDrawer />
      <AppNavbar />
      <v-main style="padding-top: 180px">
        <slot></slot>
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
import AppDrawer from "./AppDrawer.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: { AppNavbar, AppFooter, AppDrawer },
};
</script>
